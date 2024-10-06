<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<ul>
	{#each data.posts as post}
		<a href={post.slug}>
			<li class="mt-16">
				<h3 class="text-3xl font-black">{post.title}</h3>
				<p class="text-sm text-gray-500 font-serif mt-1">{formatDate(post.date)}</p>
				<p class="font-serif mt-2">{post.peep}</p>
			</li>
		</a>
	{/each}
</ul>
