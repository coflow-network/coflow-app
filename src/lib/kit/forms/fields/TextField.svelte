<script>
  export let name;
  export let placeholder;
  export let data;
  export let color;
  export let required = false;
</script>

<style>
  div { @apply block w-full mb-4; }

  p { @apply block font-bold; }

  input {
    @apply block w-full h-12
      box-border border-2
      px-4 rounded-xl shadow-lg;
  }
</style>

<div>
  <p>{name}
    {#if required}
      <span class="text-{color}-500">*</span>
    {/if}
  </p>

  <input
    class="border-{color}-100"
    bind:value={data} 
    placeholder={placeholder}
  >
</div>