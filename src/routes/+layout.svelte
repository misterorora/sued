<title>Südstadt-Volleyball</title>
<script>
    import { fade } from 'svelte/transition';   /*used for transitions at SPA´s */
    import { cubicIn, cubicOut } from 'svelte/easing';
    export let data;
    import Header from './header.svelte';       /*imported for header on all Pages */
    import Footer from './footer.svelte';       /*imported for footer on all Pages */
    import './global.css';                      /*imported for svg background and fonts on all Pages */
</script>

<main>
    <Header />
    <Footer />
    
    <!-- Transition -->
    {#key data.pathname}
    <div
        in:fade={{ easing: cubicOut, duration: 300, delay: 400 }}
        out:fade={{ easing: cubicIn, duration: 300 }}
    >
        <slot />
    </div>
{/key}
</main>
