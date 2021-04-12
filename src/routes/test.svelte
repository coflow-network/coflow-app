<script>
  import { svg64 } from 'svg64';
  import { readFileSync } from 'fs';
  
  function svgToString(src) {
      const svg = readFileSync(src, 'utf-8');
      const string = svg64(svg);
      
      return string;
  }

  import InlineSVG from 'svelte-inline-svg';
  
  let svgSrc = '/test.svg';
  let stringSrc = svgToString(svgSrc);
</script>

<InlineSVG src={stringSrc}/>