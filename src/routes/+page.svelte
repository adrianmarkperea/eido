<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul>
		{#each data.posts as post}
			<li class="mt-10">
				<a href={post.slug}><h3 class="text-3xl font-black">{post.title}</h3></a>
				<p class="text-sm text-gray-500 font-serif mt-1">{formatDate(post.date)}</p>
				<p class="font-serif mt-2">{post.peep}</p>
				<a href={post.slug}><p class="mt-4 font-serif text-green-600">Read more...</p></a>
			</li>
		{/each}
	</ul>
</section>
