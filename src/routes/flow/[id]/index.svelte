<script context="module">
  export async function load({ page, fetch }) {
    const { id } = page.params;
    const flow = await fetch(`/flow/${id}.json`).then((r)=>r.json());

    return {
      props: { flow }
    }
  }
</script>

<script>
  export let flow;
</script>

<svelte:head>
  <title>{flow.name}</title>
</svelte:head>

<p>{flow.id}</p>