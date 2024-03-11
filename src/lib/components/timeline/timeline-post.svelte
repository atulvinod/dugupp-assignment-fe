<script lang="ts">
    import eclipseSmall from "$lib/assets/eclipse-small.svg";
    import type { Post, PostEvent } from "$lib/models";
    export let postEvent:PostEvent;
</script>

<div class="flex w-full">
            
    <div class="flex timeline-left-content-width">
        <div class="flex-1 flex justify-end items-center mr-3">
            <span class="text-app-grey text-sm">{postEvent.eventDate}</span>
        </div>
        <div
            class="timeline-dot-container-width flex flex-col justify-center items-center"
        >
            <img src={eclipseSmall} alt="timeline-eclipse" />
        </div>
    </div>
    <div class="flex-1">
        <div class="flex flex-row wrap ">
            {#each postEvent.posts as p}
                <div class="rounded-xl w-80 h-56 app-border border-gray-400 overflow-hidden flex flex-col m-5">
                    <div class="flex-1">
                        <img src={p.postImageSrc}/>
                    </div>
                    <p class="p-6 text-sm">
                        {p.postTitle}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>