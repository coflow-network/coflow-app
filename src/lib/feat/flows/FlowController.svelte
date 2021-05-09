<script>
    import { state } from './stores.js';

    import { BigButton } from '$lib/ui/buttons';

    export let cards;

    function next() {
        console.log("next ", $state)
        if ($state + 1 < cards.length) {
            state.update(c => c + 1);
        }
    }

    function prev() {
        if ($state > 0) {
            state.update(c => c - 1);
        }
    }
</script>


<div class="controls">
    <BigButton action={prev} color="neutral" text="&#x276E;" />
    <BigButton action={next} color="neutral" text="&#x276F;" />
</div>

<style>
    .controls {
        @apply absolute z-10 bottom-2 left-6 right-6 h-32 flex flex-row justify-between;
    }
</style>