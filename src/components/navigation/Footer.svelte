<script lang="ts">
  
</script>

<div id="footer">
  <div class="rights">© Travis Lane {new Date().getFullYear()}</div>
  <div class="tech">
    <div>Built with</div>
    <img src="/images/svelte-logo.svg" alt="Svelte">
    <img src="/images/tauri-logo.svg" alt="Tauri">
    <img src="/images/ts-logo.svg" alt="TypeScript">
    <img src="/images/rust-logo.svg" alt="Rust">
  </div>
</div>

<style>
  #footer {
    width: calc(100% - 2rem);
    max-width: 40rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
		opacity: 0.4;
		font-size: 12px;

    padding-bottom: 0.5rem;
  }

	.rights {
		right: 7px;
		bottom: 7px;

		z-index: 1000;
	}

  .tech {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>