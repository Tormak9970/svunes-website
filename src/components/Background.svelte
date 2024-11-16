<script lang="ts">
  const MAX_NOTES = 50;
  const musicNotes = [ "🎵", "🎶" ];
  
  let numNotes = 0;

  function createFloatingNote() {
    const note = document.createElement('div');
    note.classList.add('music-note');

    const noteContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];
    note.textContent = noteContent;

    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = window.innerHeight + 30;
    const animationDuration = Math.random() * 5 + 5;

    note.style.left = `${startPositionX}px`;
    note.style.top = `${startPositionY}px`;
    note.style.animationDuration = `${animationDuration}s`;

    document.getElementById('floating-notes-container')!.appendChild(note);

    note.addEventListener('animationend', () => {
      note.remove();
      numNotes--;
    });
  }

  setInterval(() => {
    if (numNotes < MAX_NOTES) {
      numNotes++;
      createFloatingNote();
    }
  }, 500);
</script>

<div id="background">
  <div id="floating-notes-container"></div>
</div>

<style>
  /* Full screen, no margin */
  #background {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /* Container for the floating music notes */
  #floating-notes-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 30px);
  }

  /* Styling for music notes (default, can be overwritten by JS) */
  :global(.music-note) {
    position: absolute;
    font-size: 24px;
    animation: float 10s linear infinite;
    opacity: 0.8;
    color: transparent;  
    text-shadow: 0 0 0 rgb(var(--m3-scheme-primary-container) / 0.6);
  }

  @keyframes float {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
</style>