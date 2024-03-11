<script lang="ts">
    import userLogo from "$lib/assets/krishna-kiran.png";
    import {ChevronDown} from "lucide-svelte";
</script>
<div class="flex items-center mx-6">
    <div class="h-12 w-12 border border-black rounded-full">
        <img src={userLogo} class="object-fit" alt="current-user"/>
    </div>
    <span class="mx-3">Krishna Kiran</span>
    <ChevronDown class="mx-2 cursor-pointer"/>
</div>