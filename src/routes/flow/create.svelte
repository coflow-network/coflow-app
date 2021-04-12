<script context="module">
  export async function load({ page }) {
    let space = page.query.get('s');

    return {
      props: { space }
    };
  };
</script>

<script>
  export let space;
  
  import { CreateFlowForm } from '$lib/feat/flows';
</script>

<CreateFlowForm {space}/>