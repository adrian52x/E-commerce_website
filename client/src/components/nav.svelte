<script>
import { Router, Link, Route } from 'svelte-routing';
import { authenticated, authenticatedUser, searchResultLength, searchResult, searchKeyword, baseURL, cart } from '../store/generalStore';
  
// default for Categories DROP DOWN 
let active = "false";

function isActive() {
  if(active === 'active'){
      active = 'false'
    } else {
      active = 'active'
  } 
}


// Login / Logout buttons
let auth = false;
authenticated.subscribe(a => auth = a);
  
const logout = async () => {
    await fetch(`${baseURL}/api/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
    location.reload();
    
}

// Binded to Search Bar
let searchKey = '';

// Items in cart
let itemsInCart = 0
$:{
  let count = 0
  for(let item of $cart){
    count += item.quantity
  }
  itemsInCart = count
}
  

async function getSearchData(){
  const response = await fetch(`${baseURL}/api/products/search/${searchKey}`);
  const repositoryData = await response.json();

  // equivalent to: searchResult.set(repositoryData)
  searchResult.set(repositoryData.webshop_products); // <================== set the store
  searchResultLength.set(repositoryData.total_products);
  searchKeyword.set(searchKey);
      
      
};

    
</script>

<style>

  
  #categories_link, .navbar-item {
    font-size: 20px;
    font-family: "Lucida Console", "Courier New", monospace;
  }

  #categories_dropdown {
    font-size: 20px;
  }

  .searchBtn {
    border: none;
    margin-left: 15px;
  }

  .userEmail {
    font-size: 15px;
  }


</style>


<!-- svelte-ignore a11y-no-redundant-roles -->
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

    <!-- CATEGORIES WITH DROP DOWN -->
      <div id="categories_link" class="navbar-item has-dropdown is-{active}">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a  on:click={() => isActive()} class="navbar-link">Categories</a>
    
        <div id="categories_dropdown" class="navbar-dropdown">
          <Link to = "category/computers" class="navbar-item">Computers</Link>
          <Link to = "category/phones" class="navbar-item">Phones</Link>
          <Link to = "category/tvs" class="navbar-item">TVs</Link>
          <Link to = "category/gaming" class="navbar-item">Gaming</Link>
          <Link to = "category/watches" class="navbar-item">Watches</Link>
          <hr class="navbar-divider">
          <Link to = "category/all" class="navbar-item">All products</Link>
          <hr class="navbar-divider">
        </div>

      </div>

      <!-- LOGO -->
      <!-- svelte-ignore a11y-missing-attribute-->
      <a href = "/" class="navbar-item" to="/"> <img src="/assets/images/dashboard/logo8.jpg" width="150" height="50"></a>
    </div>



<div class="navbar-menu">
  <div class="navbar-start">
    
  <!-- SEARCH BAR -->
    <div class="panel-block ">
      <p class="control has-icons-right">
        <input class="input" type="text" bind:value={searchKey} placeholder="Search e.g: iphone">
      </p>

      <span class="icon is-right">
        <Link to = "search" on:click = {() => getSearchData()}>
          <button class="button searchBtn">
              <span class="icon">
                  <i class="fas fa-search"></i>
                </span>
          </button>
        </Link>
      </span>
    </div>

  </div>



  <div class="navbar-end">
    <div class="navbar-item">
      

      <!-- Shopping cart -->
      {#if itemsInCart > 0 }
        <Link to = "shopping-cart" class="navbar-item">
          <span>Shopping cart <small>{itemsInCart}</small></span>
          <span class="icon is-small"><i class="fas fa-cart-arrow-down"></i></span>
        </Link>
      {:else}
        <Link to = "shopping-cart" class="navbar-item">
          <span>Shopping cart &nbsp;</span>
          <span class="icon is-small"><i class="fas fa-cart-arrow-down"></i></span>
        </Link>
      {/if}
      
      
      <!-- Contact -->
      <Link to = "contact" class="navbar-item">
        <span>Contact us &nbsp;</span>
        <span class="icon is-small"><i class="fa fa-envelope-open" aria-hidden="true"></i></span>
      </Link>
      <!-- My account -->
      <div class="navbar-item has-dropdown is-hoverable">
        <div  class="navbar-item">
          <span>My account &nbsp;</span>
          <span class="icon is-small"><i class="fa fa-address-book" aria-hidden="true"></i></span>
        </div>
  
        <!-- Profile -->
        <div class="navbar-dropdown">
          
          {#if auth}
            <div class="navbar-item userEmail">{$authenticatedUser.email}</div>
            <Link to = "profile" class="navbar-item">Profile</Link>
            <hr class="navbar-divider">
            <Link to = "/" class="navbar-item" on:click={logout} >Log Out</Link>
          {:else}
            <Link to = "login" class="navbar-item">Log in</Link>
            <Link to = "register" class="navbar-item ">Register</Link>
          {/if}

        </div>
      </div>
    </div>
  </div>

  
</div>
</nav>
<hr class="navbar-divider">




