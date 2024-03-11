<script lang="ts">
    import { User } from "$lib/models";
    import AppButton from "../app-button/app-button.svelte";
    import {ExternalLinkIcon, MoreHorizontal} from "lucide-svelte"
    export let user: User;
</script>


<div>
    <div class="flex flex-row items-center">

        <div class="flex flex-col w-56 items-center text-center">
            <img src={user.profileImageSrc} alt="user-image" class="w-full"/>
            <h1 class="text-xl font-bold mt-2">
                {user.name}
            </h1>
        </div>
        <div class="ml-10 ">
            <div class="flex flex-col">
                <div class="flex ">

                    <p class="w-2/3 text-sm">
                        {user.description}
                    </p>
                    <div class="flex flex-col text-right items-end flex-1">
                        <img src={user.companyImage} alt="user-company-image" class="h-10 w-10" />
                        <span class="font-bold ">{user.companyName}</span>
                        <span class="text-app-grey text-sm">{user.jobTitle}</span>
                    </div>
                </div>
                <div class="flex justify-between mt-5">
                    <AppButton text="Followed" onClick={()=>{}} variant="cta" withIcon={false}/>
                    <div class="flex ">
                        <a href={user.websiteURL}>
                            <span class="flex items-center text-sm text-app-light-grey">My website <ExternalLinkIcon class="h-5 w-5 ml-1"/></span>
                        </a>
                        <MoreHorizontal class="ml-3 text-app-grey"/>
                    </div>
                </div>
             
            </div>
        </div>
        
    </div>
</div>