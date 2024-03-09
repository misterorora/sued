<script>
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import './global.css';
</script>

<main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <Header />
    <slot />
    <Footer />

</main>
