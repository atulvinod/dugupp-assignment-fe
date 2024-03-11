<script lang="ts">
    import "./app-button.style.css";
    import type { SvelteComponent } from "svelte";
    import clsx from "clsx";
    export let onClick: () => void;
    export let text: string;
    export let variant: "outline" | "cta" = "outline";
    export let withIcon: boolean = true;
</script>

<button
    on:click={onClick}
    class={clsx(
        "flex items-center justify-center  rounded-lg w-fit h-fit",
        variant == "cta"
            ? "border-2 border-[#4d4d4d] app-button-button_cta px-4"
            : "px-6"
    )}
>
    {#if withIcon}
        <span class="p-1">
            <slot />
        </span>
    {/if}
    <span class="text-sm p-2">
        {text}
    </span>
</button>
