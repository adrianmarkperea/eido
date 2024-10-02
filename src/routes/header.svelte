<script lang="ts">
    import * as config from '$lib/config'
</script>

<header class="mb-14 flex flex-row place-content-between">
    <a href="/">
        <h1>{config.title}</h1>
        <h3 class="italic">{config.description}</h3>
    </a>
    <nav>
        <ul class="flex flex-row gap-3">
            <li>
                <a href="/blog">blog</a>
            </li>
            <li>
                <a href="/works">works</a>
            </li>
        </ul>
    </nav>
</header>