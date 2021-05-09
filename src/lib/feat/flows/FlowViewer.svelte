<script>
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';
    import { BigButton } from '$lib/ui/buttons';

    export let flow;
    export let cards;

    let current = writable(0);

    function next() {
        if ($current + 1 < cards.length) {
            current.update((c) => c + 1);
        }
    }

    function prev() {
        if ($current > 0) {
            current.update((c) => c - 1);
        }
    }

    function shift(card, focal) {
        let index = cards.indexOf(card);
        if (index < focal) {
            return 'left';
        } else if (index === focal) {
            return 'center';
        } else if (index > focal) {
            return 'right';
        } else {
            throw Error(`Flow card index error; index is ${index} and current is ${$current}`);
        }
    }
</script>

<svelte:head>
    <title>{flow.name}</title>
</svelte:head>

<div class="viewer">
    {#each cards as card}
    <div class="card {card.color} {shift(card, $current)}">
        <h1 class="font-bold text-5xl text-white">{card.text}</h1>
    </div>
    {/each}
    <div class="controls">
        <BigButton action={prev} color="neutral" text="&#x276E;" />
        <BigButton action={next} color="neutral" text="&#x276F;" />
    </div>
</div>

<style>
    .viewer {
        @apply w-full h-full overflow-hidden;
    }

    .card {
        @apply fixed h-full w-full flex items-center justify-center text-5xl;
    }

    .controls {
        @apply absolute z-10 bottom-2 left-6 right-6 h-32 flex flex-row justify-between;
    }

    .center {
        @apply transition ease-in-out duration-1000 transform translate-x-0;
    }

    .left {
        @apply transition ease-in-out duration-1000 transform -translate-x-full;
    }

    .right {
        @apply transition ease-in-out duration-1000 transform translate-x-full;
    }
</style>