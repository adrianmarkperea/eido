<script lang="ts">
	import * as config from '$lib/config';

	export let hasEnergy = false;
</script>

<header class="mb-10">
	<a href="/">
		<span
			class="block text-5xl font-black lowercase tracking-tight"
			class:tracking-[-0.1em]={hasEnergy}
			style="transition: letter-spacing 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);"
			>markperea</span
		>
	</a>
	<span class="block mt-2 text-lg text-gray-500 font-serif">{config.subtitle}</span>
</header>
