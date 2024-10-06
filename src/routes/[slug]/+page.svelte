<script lang="ts">
	import { formatDate } from '$lib/utils';
	import './content.css';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<h1 class="text-4xl font-bold">{data.meta.title}</h1>
	<p class="text-sm text-gray-500 font-serif mt-1">{formatDate(data.meta.date)}</p>

	<div class="content mt-8">
		<svelte:component this={data.content} />
	</div>
</article>
