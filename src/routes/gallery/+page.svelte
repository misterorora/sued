<script>
  // Import your images
  import image1 from "$lib/assets/1.jpg";
  import image2 from "$lib/assets/2.jpg";
  import image3 from "$lib/assets/3.jpg";
  import image4 from "$lib/assets/4.jpg";
  import image5 from "$lib/assets/5.jpg";
  import image6 from "$lib/assets/sprung.jpg";

  // Store them in an array
  const images = [image1, image2, image3, image4, image5, image6];
</script>

<main>
  <h1>Gallery</h1>

  <div class="image_grid">
    <!-- Render each image with its corresponding width -->
    {#each images as image}
      <div style="width: {100 / images.length}%">
        <img src={image} alt="An optimized image" />
      </div>
    {/each}
  </div>
</main>

<style>
  .image_grid {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* Adjust as needed */
  }

  .image_grid img {
    width: calc(100vw / 6); /* Distribute 6 images across the viewport width */
    max-width: 100%; /* Ensure images don't exceed their container's width */
    height: auto; /* Maintain aspect ratio */
  }
</style>

