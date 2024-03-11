<script>
    import "../app.pcss";
    import Navbar from "$lib/components/navbar/navbar.svelte";
</script>

<main class="mx-28">
    <Navbar/>
    <slot/>
</main>
