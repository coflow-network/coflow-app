<script>
/** 
  import InlineSVG from 'svelte-inline-svg';

  import svgToString from '$lib/ui/svg';

  const openmoji = require('openmoji');

  const om = openmoji.openmojis
  let svgSrc = o[5].openmoji_images.color.svg

  let stringSrc = svgToString(svgSrc);
**/
</script>

<style>
  .emoji {
    @apply block w-full h-full;
  }
</style>

<p>{src}</p>
<div class='emoji'>
	<InlineSVG src={stringSrc}/>
</div>