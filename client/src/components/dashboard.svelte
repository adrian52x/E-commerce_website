<script>
    import Slider from "./slider.svelte";
    import axios from 'axios';

    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
    import { onMount } from 'svelte';
    import { baseURL, allProducts } from '../store/generalStore';
    import { Row, Col, MaterialApp } from 'svelte-materialify';

    import ProgressCircular from './progressCircular.svelte';
    import ProductCard1 from './product-card1.svelte';
   
    console.log(baseURL);
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

    export let products = [];

    //get all Products
    onMount(async() => {
        const { data } = await axios.get(`${baseURL}/api/products`)
        products = data.webshop_products;
        allProducts.set(products);
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
    <div class="tabs is-fullwidth $tabs-border-bottom-width=5px">
        <ul>
          <li>
            <a on:click={() => specialOffers()} >
              <span style="font-size: large;">Special offers </span>
            </a>
          </li>
          <li>
            <a on:click={() => popularCategories()} >
              <span style="font-size: large;">Popular products</span>
            </a>
          </li>
        </ul>
      </div>
</div>


<div class="container special">       
  
  {#if products.length === 0}
    <ProgressCircular/>
  {:else}
  <MaterialApp>
    <div class="d-flex justify-center mt-4 mb-4">      
                    
        <Row>
        {#each products as oneElement} 
            {#if oneElement.discount > 0}
                <Col>
                  <ProductCard1  productInfo ={oneElement}/>
                </Col>
            {/if}
          
        {/each} 
      </Row>
        
    </div> 

  </MaterialApp>
  {/if}

</div>


<div class="container popular">
  <MaterialApp>
    <div class="d-flex justify-center mt-4 mb-4">

      <Row>
        {#each products as oneElement} 
          {#if oneElement.popular == true}
            <Col>
              <ProductCard1  productInfo ={oneElement}/>
            </Col>  
          {/if}
        {/each}
      </Row> 

    </div>
  </MaterialApp>
</div>

<hr>

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