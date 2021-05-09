<script>
    import FlowController from './FlowController.svelte';
    import { state } from './stores.js';

    import { fly } from 'svelte/transition';

    export let flow;
    export let cards;

    function shift(card, focal) {
        let index = cards.indexOf(card);
        if (index < focal) {
            return 'up';
        } else if (index === focal) {
            return 'focus';
        } else if (index > focal) {
            return 'down';
        } else {
            throw Error(`Flow card index error; index is ${index} and current is ${$state}`);
        }
    }
</script>

<svelte:head>
    <title>{flow.name}</title>
</svelte:head>

<div class="viewer">
    {#each cards as card}
    <div class="card {card.color} {shift(card, $state)}">
        <h1 class="font-bold text-5xl text-white">{card.text}</h1>
    </div>
    {/each}
    <FlowController {cards} />
</div>

<style>
    .viewer {
        @apply w-full h-full overflow-hidden;
    }

    .card {
        @apply fixed h-full w-full flex items-center justify-center text-5xl;
    }

    .focus {
        @apply transition ease-in-out duration-1000 transform translate-x-0;
    }

    .up {
        @apply transition ease-in-out duration-1000 transform -translate-y-full;
    }

    .down {
        @apply transition ease-in-out duration-1000 transform translate-y-full;
    }
</style>