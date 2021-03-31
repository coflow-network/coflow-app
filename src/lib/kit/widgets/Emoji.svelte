<script>
  import InlineSVG from 'svelte-inline-svg'

  const openmoji = require('openmoji')
  const om = openmoji.openmojis
    
  let src = om[5].openmoji_images.color.svg
</script>

<style>
  .emoji {
    @apply w-full h-full;
  }
</style>

<p>{src}</p>
<div class='emoji'>
	<InlineSVG src={src}/>
</div>