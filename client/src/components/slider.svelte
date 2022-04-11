<script>
    import { flip } from 'svelte/animate';
    import { onDestroy } from 'svelte';
    export let images;
    export let imageWidth = 300;
    export let imageHeight = 300;
    export let imageSpacing = '25px';
    export let speed = 500;
    export let controlColor= '#444';
    export let controlScale = '0.5';
    export let autoplay = false;
    export let autoplaySpeed = 3000;

    let interval;

    const rotateLeft = e => {
        const transitioningImage = images[0]
        document.getElementById(transitioningImage.id).style.opacity = 0;
        images = [...images.slice(1, images.length), images[0]]
        document.getElementById(transitioningImage.id).style.opacity = 1;

    }

    const rotateRight = e => {
        const transitioningImage = images[images.length - 1]
        document.getElementById(transitioningImage.id).style.opacity = 0;
        images = [images[images.length -1],...images.slice(0, images.length - 1)]
        document.getElementById(transitioningImage.id).style.opacity = 1;
    }


    const startAutoPlay = () => {
        if(autoplay){
            interval = setInterval(rotateRight, autoplaySpeed)
        }
    }

    const stopAutoPlay = () => {
        clearInterval(interval)
    }

    if(autoplay){
        startAutoPlay()
    }

    onDestroy(() => {stopAutoPlay()})
    
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->  
<div id="carousel-container">
    <div id="carousel-images">
    {#each images as image (image.id)}
        <img 
            src={image.path} 
            alt={image.id} 
            id={image.id} 
            style={`height: ${imageHeight}px; width: ${imageWidth}px; margin: 0 ${imageSpacing}px;`}
            on:mouseover={stopAutoPlay}
            on:mouseout={startAutoPlay}
            animate:flip={{duration: speed}}/>
        
    {/each}
    </div>

    <button id="left" on:click={rotateLeft}>
        <slot name="left-control">
          <svg width="39px" height="110px" id="svg8" transform={`scale(${controlScale})`}>
            <g id="layer1" transform="translate(-65.605611,-95.36949)">
              <path
              style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
              d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
              id="path1412" />
            </g>
          </svg>
        </slot>
    </button>
    <button id="right" on:click={rotateRight}>
        <slot name="right-control">
          <svg width="39px" height="110px" id="svg8" transform={`rotate(180) scale(${controlScale})`}>
            <g id="layer1" transform="translate(-65.605611,-95.36949)">
              <path
              style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
              d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
              id="path1412" />
            </g>
          </svg>
        </slot>
    </button>

</div>
  
<style>
    #carousel-container {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      margin-bottom: 20px;
    }
    #carousel-images {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      -webkit-mask: linear-gradient(to right,transparent,black 40%,black 60%,transparent);
      mask: linear-gradient(to right, transparent, black 40%, black 60%, transparent);
    }

    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
    }

    button:focus {
        outline: auto;
    }

    #left {
        left: 10px;
    }

    #right {
        right: 10px;
    }
  </style>




