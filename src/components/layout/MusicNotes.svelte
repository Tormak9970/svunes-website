<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  const MAX_NOTES = 50;
  const MUSIC_NOTES = [ "🎵", "🎶" ];

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
      2 + Math.random() * (canvas.width - 14),
      Math.random() * 5 + 5
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
    ctx.fillStyle = "currentcolor";
    ctx.font = '24px serif'
    ctx.textAlign = "center"; 
    ctx.textBaseline = "middle";
    ctx.fillText(MUSIC_NOTES[noteIndex], x, y);
  }

  function drawNotes(time: number) {
    const distance = canvas.height + 30;

    for (let i = 0; i < MAX_NOTES; i++) {
      const data = notesData[i];

      let startTime = data[1];
      
      if (time >= startTime) {
        let timeElapsed = time - startTime;
        let duration = data[3] * 1000;
        
        if (timeElapsed > startTime + duration) {
          setNoteData(i, time);
          console.log("reset note:", i);
          startTime = time;
          timeElapsed = 0;
          duration = data[3] * 1000;
        }


        const y = mapRange(timeElapsed, startTime, startTime + duration, 0, distance);

        drawMusicNote(data[2], distance - y, data[0]);
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