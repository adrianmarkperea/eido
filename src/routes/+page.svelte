<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<section>
	<ul>
		{#each data.posts as post}
			<li class="mt-10">
				<h2 class="text-xl font-bold">{post.title}</h2>
				<p class="text-sm text-gray-500">{formatDate(post.date)}</p>
				<p>{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
