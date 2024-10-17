<script>
	import {onMount} from "svelte";
	import MyRouter from "./Components/MyRouter.svelte";

	// const store = localStorageHelper();

	let config = null
	let doConfigExists = false
	// const doesAccessTokenExists = !!store.access_token

	onMount(() => {
		window.bridge.sendConfig((event, {doConfigExists: _doConfigExists, config: _config}) => {
			doConfigExists = _doConfigExists;
			config = _config;

			console.log('From App.svelte1: ', {doConfigExists, config});
		});
	})

	console.log('From App.svelte2: ', {doConfigExists, config});

</script>


<MyRouter config={config} />

<!-- {#if !doConfigExists}
	<DefaultLayout>
		<Settings />
	</DefaultLayout>
{:else}
	{#if doesAccessTokenExists}
		<MyRouter config={config} />
	{:else}
		<DefaultLayout>
			<Connect config={config} />
		</DefaultLayout>
	{/if}
{/if} -->
