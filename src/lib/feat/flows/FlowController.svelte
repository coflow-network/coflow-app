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
    <BigButton action={prev} color="neutral" text="&uarr" />
    <BigButton action={next} color="neutral" text="&darr" />
</div>

<style>
    .controls {
        @apply absolute z-10 bottom-4 right-4 w-16 h-32 flex flex-col justify-between;
    }
</style>