<script lang="ts">
    import "./timeline.style.css";
    import eclipseSmall from "$lib/assets/eclipse-small.svg";
    import { JobEvent, PostEvent, type TimelineBase } from "$lib/models";
    import TimelinePost from "./timeline-post.svelte";
    import TimelineJob from "./timeline-job.svelte";

    export let timelineData: TimelineBase[];
</script>

<div class="relative">
    <div class="flex absolute z-[1] h-full w-full">
        <div class="timeline-left-background"></div>
        <div style="flex-1"></div>
    </div>

    <div class="relative z-[2] flex flex-col">
        {#each timelineData as td}
            {#if td instanceof PostEvent}
                <TimelinePost postEvent={td} />
            {/if}
            {#if td instanceof JobEvent}
                <TimelineJob jobEvent={td} />
            {/if}
        {/each}
    </div>
</div>
