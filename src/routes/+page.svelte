<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<section>
	<ul>
		{#each data.posts as post}
			<a href={post.slug}>
				<li class="mt-10">
					<h2 class="text-xl font-bold">{post.title}</h2>
					<p class="text-sm text-gray-500">{formatDate(post.date)}</p>
					<p>{post.peep}</p>
				</li>
			</a>
		{/each}
	</ul>
</section>
