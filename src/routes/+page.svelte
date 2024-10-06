<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<ul class="flex flex-col gap-14">
	{#each data.posts as post}
		<li>
			<a href={post.slug} class="hover:underline"
				><h3 class="text-3xl font-bold">{post.title}</h3>
			</a>
			<p class="text-sm text-gray-500 font-serif mt-1">{formatDate(post.date)}</p>
			<p class="font-serif mt-2">{post.peep}</p>
		</li>
	{/each}
</ul>
