<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
</script>


<main>

<ul>
	{#each data.posts as post}
		<li>
			<h2 class="button">
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
</main>

<style>
    a {
        text-decoration: none; 
        padding: 5px 10px; 
        border-radius: 5px; 
    }

        .member {

    }
    .button{
        background-color: #c79f50;
        transition: background-color 0.3s ease;
        color: white;
        width: 500px;
        border-radius: 15px;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }

      .button:hover {
    background-color: #a67a36;
  }

</style>