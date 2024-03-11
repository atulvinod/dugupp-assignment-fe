<script>
    import Timeline from "$lib/components/timeline/timeline.svelte";
import UserDescrption from "$lib/components/user-description/user-description.svelte";
    export let data;
</script>
<section class="mt-10">
    <div>
        <UserDescrption user={data.user}/>
    </div>
    <div class="mt-4">
        <Timeline timelineData={data.timeline}/>
    </div>
</section>