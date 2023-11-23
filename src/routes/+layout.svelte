<script>
    import Nav from '$lib/components/Nav.svelte'

    import { onMount } from 'svelte'
    import { createScene } from '$lib/scene.js'

    let canvas

    onMount(() => {
        createScene(canvas)
    })
</script>

<canvas bind:this={canvas}></canvas>

<Nav />

<slot></slot>

<style>
    canvas{
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -2;
    }
</style>