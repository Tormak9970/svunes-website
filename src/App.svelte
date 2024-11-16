<script lang="ts">
  // List of music notes symbols
  const musicNotes = [
    '🎵',
    '🎶',
  ];

  // Function to create floating music notes
  function createFloatingNote() {
    const note = document.createElement('div');
    const noteContent = musicNotes[Math.floor(Math.random() * musicNotes.length)];

    // Apply the 'music-note' class for animation
    note.classList.add('music-note');
    note.textContent = noteContent;

    // Random position and animation duration
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = window.innerHeight;
    const animationDuration = Math.random() * 5 + 5;  // Random duration between 5s and 10s

    note.style.left = `${startPositionX}px`;
    note.style.top = `${startPositionY}px`;
    note.style.animationDuration = `${animationDuration}s`;

    // Append the note to the container
    document.getElementById('floating-notes-container')!.appendChild(note);

    // Remove note when animation ends
    note.addEventListener('animationend', () => {
      note.remove();
    });
  }

  // Generate notes every 500ms
  setInterval(createFloatingNote, 500);
</script>

<main>
  <div id="floating-notes-container"></div>
</main>

<style>
  /* Full screen, no margin */
  main {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    background-color: #f0f0f0; /* You can change this to any color or even a gradient */
    position: relative;
  }

  /* Container for the floating music notes */
  #floating-notes-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Styling for music notes (default, can be overwritten by JS) */
  :global(.music-note) {
    position: absolute;
    font-size: 24px;
    animation: float 10s linear infinite;
    opacity: 0.8;
  }

  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
</style>
