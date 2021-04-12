<script context="module">
  export async function load({ page, fetch }) {
    const { id } = page.params;
    const space = await fetch(`/space/${id}.json`).then((r)=>r.json());

    return {
      props: { id, space }
    }
  }
</script>

<script>
  export let id;
  export let space;
  
  import { SpaceGrid } from '$lib/feat/spaces';
</script>

<svelte:head>
  <title>{space.name}</title>
</svelte:head>

<SpaceGrid parent={space.id}/>