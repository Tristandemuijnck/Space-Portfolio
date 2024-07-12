<script>
  import '@fontsource-variable/orbitron';

  import { onMount } from 'svelte';
  import { createScene } from '$lib/scene.js';

  let canvas;

  onMount(() => {
    console.log('onMount');
    createScene(canvas);
  });
</script>

<canvas bind:this={canvas}></canvas>

<slot />

<style>
  :global(body) {
    font-family: 'Orbitron Variable', sans-serif;
  }

  canvas {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -2;
  }
</style>
