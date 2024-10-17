<script>
    import {slide} from "svelte/transition";
    // import {localStorageHelper} from "../Helpers/localStorageHelper.js";

    export let config = {}

    // const store = localStorageHelper('store');

    const form = {
        message: null,
        data: {
            ...config
        }
    }
    const onSubmit = async () => {
        console.log("Submit !", form.data)

        // const response = await window.bridge.login(form.data);

        // form.message = response.message

        // if(response.success) {
        //     store.access_token = MontessoriAPI.login(form.data.montessori)
        // }
    }
</script>

<div class="container">
    <form on:submit|preventDefault={onSubmit}>
        <div class="row mb-3">
            <h1>Settings</h1>
        </div>

        {#if form.message}
            <div class="alert alert-success" role="alert" transition:slide>
                {form.message}
            </div>
        {/if}

        <div class="row mb-3">
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" id="username" placeholder="Username / Email" bind:value={form.data.username}>
        </div>

    </form>
</div>
