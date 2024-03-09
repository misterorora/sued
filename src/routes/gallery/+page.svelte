<script>

  import image3 from "$lib/assets/3.jpg";

  import image5 from "$lib/assets/5.jpg";
</script>

<main>
  <h1>Gallery</h1>

  <div class="image_grid">

    <img src="{image3}" alt="Image 3">

    <img src="{image5}" alt="Image 5">
  </div>
</main>

<style>
  .image_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .image_grid img {
    width: 100%;
    height: auto;
  }
</style>


<!-- https://vadimkorr.github.io/svelte-carousel/ -->