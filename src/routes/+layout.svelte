<script lang="ts">
	import Header from './header.svelte';

	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/lora';
</script>

<div class="mx-auto max-w-xl px-8 py-8">
	<Header />

	<main>
		<slot />
	</main>
</div>
