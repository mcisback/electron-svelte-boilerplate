<script>
    import {slide} from "svelte/transition";
    export let message = null
    export let success = false
</script>

<div class="notification-bar" transition:slide>
    <div class={`alert alert-${success ? 'success' : 'danger'} alert-dismissible`} role="alert">
        {message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" on:click|preventDefault={() => message = null}></button>

        <slot />
    </div>
</div>

<style>
    .notification-bar {
        position: sticky;
        width: 100%;
        /*height: 10vh;*/
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }
</style>