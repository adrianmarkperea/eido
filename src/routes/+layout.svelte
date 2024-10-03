<script lang="ts">
	import Header from './header.svelte';

	import '../app.css';
	import '../prism.css';
</script>

<div class="mx-auto max-w-2xl px-5 py-12">
	<Header />

	<main>
		<slot />
	</main>
</div>
