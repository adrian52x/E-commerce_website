<script>
    import Slider from "./slider.svelte";
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
    

    import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Button,
    Icon,
    Divider,
    MaterialApp } from 'svelte-materialify';
    import { slide } from 'svelte/transition';
    

  let active = false;
  function toggle() {
    active = !active;
  }



    const images = [
        {path: 'banner1.jpg', id: 'image1'},
        {path: 'banner2.jpg', id: 'image2'},
        {path: 'banner3.jpg', id: 'image3'},
        {path: 'banner4.jpg', id: 'image4'},
        {path: 'banner5.jpg', id: 'image5'},
        {path: 'banner6.jpg', id: 'image6'},
    ]


    
    function specialOffers() {
        document.querySelector(".special").style.display = 'block';
        document.querySelector(".popular").style.display = 'none';
    }

    function popularCategories() {
        document.querySelector(".popular").style.display = 'block';
        document.querySelector(".special").style.display = 'none';
    }

</script>

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

    .card {
        height: 400px;
        width: 300px;
        margin-left: 10px;
        margin-right: 10px;

    }

</style>


<div class="container">
    <Slider 

        images={images} imageHeight={240} imageWidth={720} imageSpacing={10} autoplay={true} autoplaySpeed={2000}>
        <span slot="left-control"><ChevronLeftIcon size="20" /></span>
        <span slot="right-control"><ChevronRightIcon size="20" /></span>
    
    </Slider>
</div>
<hr>
<!-- svelte-ignore a11y-missing-attribute -->
<div class="container">
    <div class="tabs is-fullwidth">
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
                  <Card style="max-width:200px;">
                    <img src="//picsum.photos/350" alt="background" />
                    <CardTitle>Top western road trips</CardTitle>
                    <CardSubtitle>1,000 miles of wonder</CardSubtitle>
                    <CardActions>
                      <Button text>Button</Button>
                      <Button text fab size="small" class="ml-auto" on:click={toggle}>
                        
                      </Button>
                    </CardActions>
                    {#if active}
                      <div transition:slide>
                        <Divider />
                        <div class="pl-4 pr-4 pt-2 pb-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem,
                        </div>
                      </div>
                    {/if}
                  </Card>


                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>
                  
                      <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                    </div>
                  </div>



                </div>
            </MaterialApp>
</div>

<div class="container popular">
    
    
    <h2 class="subtitle"> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>
    <h2 class="subtitle"> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>
    <h2 class="subtitle"> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>
    <h2 class="subtitle"> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>
    <h2 class="subtitle"> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>
    <h2 class="subtitle"> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>
    <h2 class="subtitle"> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.</h2>

</div>



  