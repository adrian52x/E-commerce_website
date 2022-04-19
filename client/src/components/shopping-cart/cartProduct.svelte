<script>


export let productInfo;

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
          <button class="button cartItem-btn">
            <span class="icon is-small"><i class="fas fa-minus"></i></span>
          </button>
          <button class="button cartItem-btn">
            <span class="icon is-small"><i class="fas fa-plus"></i></span>
          </button>
          <small><p>[{productInfo.quantity}] quantity</p></small>

        
        </div>
      </nav>
    </div>
    <div class="media-right">
      <button class="delete"></button>
    </div>
  </article>