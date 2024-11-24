<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  const MAX_NOTES = 50;
  const MUSIC_NOTES = [
    new Path2D("M83.5 6.49998C83.5 12 83.5 18.4182 83.5 23.9183C83.5 29.4183 79.5 30.4183 76 31.4183L47.25 42V97.3129C47.25 108.189 36.668 116.998 23.625 116.998C10.582 116.998 0 108.189 0 97.3129C0 86.4367 10.582 77.6275 23.625 77.6275C26.3813 77.6275 29.0391 78.0212 31.5 78.7594V40.2253V22.5085C31.5 19.0389 33.7887 15.9631 37.1109 14.9542L76 0.999973C79.5 -5.53727e-05 83.5 0.999982 83.5 6.49998Z"),
    new Path2D("M122.825 1.56352C124.819 3.03992 126 5.40217 126 7.88746V25.6043V90.5662C126 101.442 115.418 110.252 102.375 110.252C89.332 110.252 78.75 101.442 78.75 90.5662C78.75 79.69 89.332 70.8808 102.375 70.8808C105.131 70.8808 107.789 71.2745 110.25 72.0127V36.1853L47.25 55.0833V106.315C47.25 117.191 36.668 126 23.625 126C10.582 126 0 117.191 0 106.315C0 95.4384 10.582 86.6292 23.625 86.6292C26.3813 86.6292 29.0391 87.0229 31.5 87.7611V49.2268V31.51C31.5 28.0404 33.7887 24.9646 37.1109 23.9557L115.861 0.333177C118.248 -0.38042 120.832 0.0625023 122.825 1.56352Z")
  ];

  /**
   * A matrix in the form of:
   * 
   * [[noteIndex, startTime, x, duration], ...]
   */
  const notesData = new Array(MAX_NOTES);

  function setNoteData(index: number, startTime: number) {
    notesData[index] = [
      Math.floor(Math.random() * MUSIC_NOTES.length),
      startTime,
      Math.random(),
      (Math.random() * 5 + 5) * 1000
    ];
  }

  function mapRange(value: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number) {
    return ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
  }

  function clear(): void {
    const backgroundColor = getComputedStyle(canvas).getPropertyValue("--m3-scheme-background");
    ctx.fillStyle = `rgb(${backgroundColor})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function updateCanvas() {
    canvas.width = canvas.parentElement!.clientWidth;
    canvas.height = canvas.parentElement!.clientHeight;
  }

  function drawMusicNote(x: number, y: number, noteIndex: number) {
    const scale = noteIndex === 0 ? 0.19 : 0.20;
    ctx.fillStyle = "currentcolor";
    
    ctx.save();

    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.fill(MUSIC_NOTES[noteIndex]);

    ctx.restore();
  }

  function drawNotes(time: number) {
    const distance = canvas.height + 30;

    for (let i = 0; i < MAX_NOTES; i++) {
      const data = notesData[i];

      let startTime = data[1];
      
      if (time >= startTime) {
        let timeElapsed = time - startTime;
        let duration = data[3];
        
        if (timeElapsed > startTime + duration) {
          setNoteData(i, time);
          startTime = time;
          timeElapsed = 0;
          duration = data[3];
        }

        // * 5 from the left, 24 for the note width, 5 from the right
        const x = (canvas.width - 34) * data[2] + 5
        const y = mapRange(timeElapsed, startTime, startTime + duration, 0, distance);

        drawMusicNote(x, distance - y, data[0]);
      }
    }
  }

  function animate(currentTime:number): void {
    if (canvas) {
      clear();
      drawNotes(currentTime);
    }

    requestAnimationFrame((time) => animate(time));
  }

  onMount(() => {
    ctx = canvas.getContext('2d')!;
    updateCanvas();

    for (let i = 0; i < MAX_NOTES; i++) {
      setNoteData(i, i * 250);
    }

    animate(0);
  });

  afterUpdate(() => {
    updateCanvas();
  });
</script>

<svelte:window on:resize={updateCanvas} />

<div class="music-notes">
  <canvas bind:this="{canvas}" />
</div>

<style>
  .music-notes {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: rgb(var(--m3-scheme-primary-container) / 0.4);

    background-color: rgb(var(--m3-scheme-background));
  }
</style>