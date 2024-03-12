<script lang="ts">
    import "./timeline.style.css";
    import { JobEvent, PostEvent, type TimelineBase } from "$lib/models";
    import TimelinePost from "./timeline-post.svelte";
    import TimelineJob from "./timeline-job.svelte";

    export let timelineData: TimelineBase[];
</script>

<div class="relative">
    <div class="flex absolute z-[1] h-full w-full">
        <div class="timeline-left-background flex justify-end">
            <div style="width: 5px;">
                <svg xmlns="http://www.w3.org/2000/svg" style="height:100%">
                    <pattern id="bg2" patternUnits="userSpaceOnUse" width="8" height="12">
                        <circle fill="#778fb1" cx="2" cy="8" r="1.5" />
                    </pattern>
                    <rect width="5" height="100%" fill="url(#bg2)" />
                </svg>
            </div>
            
        </div>
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
