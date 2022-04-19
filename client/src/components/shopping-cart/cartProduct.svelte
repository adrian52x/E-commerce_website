<script>
import { cart } from '../../store/generalStore';  
export let productInfo;

let disabled = false;
if(productInfo.quantity == 1) { disabled = true; }

const addOne = () => {
  productInfo.quantity++
  $cart = $cart
  if(productInfo.quantity > 1) { disabled = false; }
}

const deleteOne = () => {
  productInfo.quantity--
  $cart = $cart
  if(productInfo.quantity == 1) { disabled = true; }
}

const deleteAll = () => {
  $cart = $cart.filter(item => productInfo._id != item._id )
}

</script>
 
<style>
     .cartItem-btn {
         border: none;
         margin-right: 10px;
     }
</style>
 
<!-- svelte-ignore a11y-missing-attribute -->
<article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{productInfo.title}</strong> <small>@{productInfo.category}</small> <small>{productInfo.price}</small>
          <br>
          {productInfo.description} 
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">

          <button class="button cartItem-btn" on:click={deleteOne} {disabled}>
            <span class="icon is-small"><i class="fas fa-minus"></i></span>
          </button>
          <button class="button cartItem-btn" on:click={addOne}>
            <span class="icon is-small"><i class="fas fa-plus"></i></span>
          </button>

          <small><p>[{productInfo.quantity}] quantity</p></small>

        
        </div>
      </nav>
    </div>
    <div class="media-right">
      <small>
        <p>Remove from cart
          <button class="delete" on:click={deleteAll}></button>
        </p>
      </small>
      
    </div>
  </article>