<script>
    import Slider from "./slider.svelte";
    import axios from 'axios';

    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
    import { onMount } from 'svelte';
    import { baseURL } from '../store/generalStore';
    import { SlideGroup, SlideItem, Ripple, Card, CardTitle, CardSubtitle, CardActions, Button, Icon, Divider, MaterialApp } from 'svelte-materialify';
  

    import ProductCard1 from './product-card1.svelte';
    import ProductCard2 from './product-card2.svelte';

 
    let active = false;
    function toggle() {
      active = !active;
    }


    const images = [
        {path: '/assets/images/dashboard/banner1.jpg', id: 'image1'},
        {path: '/assets/images/dashboard/banner2.jpg', id: 'image2'},
        {path: '/assets/images/dashboard/banner3.jpg', id: 'image3'},
        {path: '/assets/images/dashboard/banner4.jpg', id: 'image4'},
        {path: '/assets/images/dashboard/banner5.jpg', id: 'image5'},
        {path: '/assets/images/dashboard/banner6.jpg', id: 'image6'},
    ]


    let products = [];

    onMount(async() => {
        const { data } = await axios.get(`${baseURL}/api/products`)
        products = data.webshop_products;
        console.log(products);
    })

    
    
    function specialOffers() {
        document.querySelector(".special").style.display = 'block';
        document.querySelector(".popular").style.display = 'none';
    }

    function popularCategories() {
        document.querySelector(".popular").style.display = 'block';
        document.querySelector(".special").style.display = 'none';
    }

</script>




<div class="container">
    <Slider 

        images={images} imageHeight={240} imageWidth={720} imageSpacing={5} autoplay={true} autoplaySpeed={3000}>
        <span slot="left-control"><ChevronLeftIcon size="20" /></span>
        <span slot="right-control"><ChevronRightIcon size="20" /></span>
    
    </Slider>
</div>
<hr>
<!-- svelte-ignore a11y-missing-attribute -->
<div class="container">
    <div class="tabs is-fullwidth $tabs-border-bottom-width=5px ">
        <ul>
          <li>
            <a on:click={() => specialOffers()} >
              <span>Special offers</span>
            </a>
          </li>
          <li>
            <a on:click={() => popularCategories()} >
              <span>Popular products</span>
            </a>
          </li>
        </ul>
      </div>
</div>


<div class="container special">
            
  <MaterialApp>
    <div class="d-flex justify-center mt-4 mb-4">
            
      {#each products as oneElement} 
          {#if oneElement.price > 1000}
              <ProductCard1  productInfo ={oneElement}/>
              {:else }
              <ProductCard1 isProductDisabled=true, productInfo ={oneElement}/>
          {/if}

        
      {/each}            
                       
    </div>
 

   


  
    <style>
      .rounded {
        width: 150px;
        height: 200px;
        margin: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--theme-dividers);
      }
    </style>
    
    <SlideGroup activeClass="white-text">
      <span slot="previous">
        <ChevronLeftIcon size="20" />
      </span>
      
      {#each products as oneElement, i} 
      <SlideItem let:active>
        <div class="rounded" class:primary-color={active} use:Ripple>{i + 1}</div>
      {#if oneElement.price > 1000}
          <ProductCard1  productInfo ={oneElement}/>
          {:else }
          <ProductCard1 isProductDisabled=true, productInfo ={oneElement}/>
      {/if}

    </SlideItem>
      {/each} 


      <span slot="next">
        <ChevronRightIcon size="20" />
      </span>
    </SlideGroup>
    

 </MaterialApp>



</div>



<div class="container popular">
    
  <MaterialApp>
    <div class="d-flex justify-center mt-4 mb-4">

      {#each products as oneElement} 
        <ProductCard2  productInfo2 ={oneElement}/>
      {/each}
        
    </div>
</MaterialApp>

</div>



<style>
    
  .container {
      margin-top: 30px;
      margin-bottom: 30px;
  }

  .tabs {
      font-family: "Lucida Console", "Courier New", monospace;
    
      
  }
  

  .special {
      display: block;
  }
  .popular {
      display: none;
  }

  
</style>