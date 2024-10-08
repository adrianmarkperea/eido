<script lang="ts">
	import Analytics from './Analytics.svelte';
	import Header from './Header.svelte';

	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/lora';

	export let data;
</script>

<Analytics />

<div class="mx-auto max-w-xl px-8 py-8">
	<Header hasEnergy={data.url !== '/'} />

	<main>
		<slot />
	</main>
</div>
