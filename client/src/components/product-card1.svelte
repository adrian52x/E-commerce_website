<script>
    import {Card, CardTitle, CardSubtitle, CardActions, Button, Icon, Divider, Row, Col, Tooltip, Dialog, MaterialApp } from 'svelte-materialify';
    import { cart } from '../store/generalStore';

    let addToCartNotifi = false;


    export let productInfo;

    const addToCart = () => {
      //Added to cart notification (1s)
      addToCartNotifi = !addToCartNotifi;
        
      if(addToCartNotifi){
        setTimeout(() => {
          addToCartNotifi = false;
        }, 1000);   
      }  


      // Add to cart and set quantity
      for(let item of $cart){
        if(item._id === productInfo._id){
          item.quantity++;
          $cart = $cart;
          return
          
        }
      }
      productInfo.quantity = 1
      $cart = [...$cart, productInfo]

      console.log($cart);

      
    }


    let isInfoDialogActive;

    export let isProductDisabled;

    let discount = 0.1
</script>



<!-- svelte-ignore missing-declaration -->


    <Card class="card" disabled="{isProductDisabled}"  hover="true" style="max-width:200px; height: 600px; margin-left: 15px;">
        <img src="//picsum.photos/350" alt="background" />
        <CardTitle><p>{productInfo.title}</p></CardTitle>
        <CardSubtitle>{productInfo.description}</CardSubtitle>
        <CardSubtitle><b>{productInfo.price}</b></CardSubtitle>
        
        <Divider  />
        <div class="text-center" ><Button on:click={() => (isInfoDialogActive = true)}>MORE INFO</Button></div>
        
        <CardActions>
        
        <Row class="text-center" >
           
            <Col cols={12}>
              <Button on:click={addToCart}>ADD TO CART <span class="icon is-small"><i class="fas fa-cart-arrow-down"></i></span></Button>
            </Col>
            <Col cols={12} class="mt-12">
              <Tooltip color="#008000" top bind:active={addToCartNotifi}>
                <span slot="tip" >Item added to your cart</span>
              </Tooltip>
            </Col>
          </Row>

        </CardActions>

        
        <Dialog class="pa-4 text-center" bind:active={isInfoDialogActive}>
            <i><p>Information</p></i><br>
            <p>{productInfo.title}</p>
            <p>{productInfo.description}</p>
            <p><b><s>{productInfo.price}</s></b></p>
            <p><b>{productInfo.price*(1-discount)}</b></p>
            
        </Dialog>


    </Card>

    