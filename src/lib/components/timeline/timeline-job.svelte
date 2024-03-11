<script lang="ts">
    import eclipseLarge from '$lib/assets/eclipse-large.svg';    
    import  { JobEvent, JobEventType } from '$lib/models';
    export let jobEvent: JobEvent;
</script>


<div class="flex w-full">
            
    <div class="flex timeline-left-content-width">
        <div class="flex-1 flex flex-col items-end mr-3">
            <div class="flex flex-col items-end">
                <img src={jobEvent.companyLogoSrc} alt="job-company-logo" class="h-12"/>
                <div class="mt-1 flex flex-col items-end">
                    <span class="font-bold">{jobEvent.companyName}</span>
                    <span class="text-app-grey text-sm">{jobEvent.companyLocation}</span>
                    <span class="text-app-grey text-sm">{jobEvent.jobEventType}</span>
                    <span class="text-app-grey text-sm">{jobEvent.eventDate}</span>
                </div>
      
            </div>
          

        </div>
        <div
            class="timeline-dot-container-width flex flex-col justify-center items-center"
        >
            <img src={eclipseLarge} alt="timeline-eclipse" />
        </div>
    </div>
    <div class="flex-1 flex flex-col justify-center">
       <div class="rounded-lg bg-white px-4 py-5 timeline-job-event ml-5 w-3/4">
            <h1 class="font-bold text-xl">{jobEvent.jobRole}</h1>
            <span class="text-sm text-app-grey">{jobEvent.jobType} </span>
            {#if jobEvent.jobLocation}
                <span class="text-sm text-app-grey">&#8231; {jobEvent.jobLocation}</span>
            {/if}
       </div>
    </div>
</div>