<script>
    import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Button,
    Icon,
    Divider,
    Row,
    Col,
    Tooltip,
    Dialog,
    MaterialApp } from 'svelte-materialify';

    
    let show = false;

    function showNotification() {
        show = !show;
        
        if(show){
            setTimeout(() => {
                show = false;
            }, 1600);
        }
    }


    let activeInfo;

    export let productInfo;
    export let isProductDisabled;
</script>



<!-- svelte-ignore missing-declaration -->


    <Card class="card" disabled="{isProductDisabled}"  hover="true" style="max-width:200px; height: auto; margin-left: 15px;">
        <img src="//picsum.photos/350" alt="background" />
        <CardTitle>{productInfo.title}</CardTitle>
        <CardSubtitle>{productInfo.description}</CardSubtitle>
        <CardSubtitle><b>{productInfo.price}</b></CardSubtitle>
        
        <Divider />
        <div class="text-center"><Button on:click={() => (activeInfo = true)}>MORE INFO</Button></div>
        
        <CardActions>
        
        <Row class="text-center">
           
            <Col cols={12}>
              <Button on:click={() => { showNotification()} }>ADD TO CART</Button>
            </Col>
            <Col cols={12} class="mt-12">
              <Tooltip color="#008000" top bind:active={show}>
                <span class="icon is-small"><i class="fas fa-cart-arrow-down"></i></span>
                <span slot="tip" >Item added to your cart</span>
              </Tooltip>
            </Col>
          </Row>

        </CardActions>

        
        <Dialog class="pa-4 text-center" bind:active={activeInfo}>
            <i><p>Information</p></i><br>
            <p>{productInfo.title}</p>
            <p>{productInfo.description}</p>
            <p><b>{productInfo.price}</b></p>
            
        </Dialog>


    </Card>

    