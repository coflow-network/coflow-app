<script context="module">
  export async function load({ page, fetch }) {
    const { id } = page.params;
    const space = await fetch(`s${id}.json`).then((r)=>r.json());

    return {
      props: { id, space }
    }
  }
</script>

<script>
  export let id;
  export let space;
</script>

<svelte:head>
  <title>{space.name}</title>
</svelte:head>

<h1>{space.name}</h1>

<p>{JSON.stringify(space)}</p>
