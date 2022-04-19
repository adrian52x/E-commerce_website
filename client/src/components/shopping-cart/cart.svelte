<script>
    import { Container, Row, Col, MaterialApp } from 'svelte-materialify';
    import CartProduct from './cartProduct.svelte';
    import { cart } from '../../store/generalStore';

    // Items in cart
    let itemsInCart = 0
    $:{
    let count = 0
    for(let item of $cart){
        count += item.quantity
    }
    itemsInCart = count
    }

    // Total price of all items in cart
    let totalPrice = 0
    $:{
    let count = 0
    for(let item of $cart){
        count += item.quantity * item.price
    }
    totalPrice = count
    }

</script>

<style>
    .title {
        text-align: center;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .container {
        margin-top: 60px;
        min-height: calc(100vh - 70px);
    }
</style>

<div class="container">
    <div class="box">
        <h1 class="title"><i>Shopping cart &nbsp;</i> <span class="icon is-small"><i class="fas fa-cart-arrow-down"></i></span> &nbsp; | {itemsInCart} items</h1>

        {#each $cart as result}
            <CartProduct productInfo = {result}/>
        {/each}

        
       

        <hr>
        <div class="level-right">
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Total price &nbsp;</p>
                <p class="title">{totalPrice}</p>
                </div>
                
                <button class="button is-success is-outlined">Checkout</button>
            </div>
        </div>
    </div>
</div>



