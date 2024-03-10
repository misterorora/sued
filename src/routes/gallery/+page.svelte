<script>
  import Carousel from 'svelte-carousel';
  import image1 from "$lib/assets/1.jpg";
  import image2 from "$lib/assets/2.jpg";
  import image3 from "$lib/assets/3.jpg";
  import image4 from "$lib/assets/4.jpg";

  let imageGallery = [
    image1,
    image2,
    image3,
    image4,
  ];
</script>

<main>
  <div class="adjust">
  <Carousel autoplay="2000">
      {#each imageGallery as src, imageIndex (src)}
        <div class="img-container">
            <img src={src} alt="Image" />
        </div>
      {/each}
  </Carousel>
</div>
</main>

<style>
  .img-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .img-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;
  }

.adjust {
  width: 65%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  border-radius: 5px;
}

</style>
