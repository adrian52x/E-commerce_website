<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Search from '../pages/search.svelte';
  import { searchResultLength, searchResult, searchKeyword, baseURL } from '../store/generalStore';
  
  // default for Categories DROP DOWN 
  let active = "false";

  function isActive() {
    if(active === 'active'){
      active = 'false'
      } else {
      active = 'active'
      }
  }


  // Binded to Search Bar
  let searchKey = '';

  

  async function getSearchData(){

      const response = await fetch(`${baseURL}/api/products/search/${searchKey}`);
      const repositoryData = await response.json();

      // equivalent to: searchResult.set(repositoryData)
      searchResult.set(repositoryData.webshop_products); // <================== set the store
      searchResultLength.set(repositoryData.total_products);
      searchKeyword.set(searchKey);
      
      console.log(repositoryData.webshop_products);
      console.log(repositoryData.total_products);
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
          <div class="navbar-item">My account</div>
          <Link to = "login" class="navbar-item">Log in</Link>
          <Link to = "register" class="navbar-item">Sing up</Link>
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
        <input class="input" type="text" bind:value={searchKey} placeholder="Search">
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
      <a href = "/" class="navbar-item">
        <span>Shopping cart &nbsp;</span>
        <span class="icon is-small"><i class="fas fa-cart-arrow-down"></i></span>
      </a>
      <!-- Contact -->
      <a href = "/" class="navbar-item">
        <span>Contact {searchKey} &nbsp;</span>
        <span class="icon is-small"><i class="fa fa-envelope-open" aria-hidden="true"></i></span>
      </a>
      <!-- My account -->
      <div class="navbar-item has-dropdown is-hoverable">
        <a href = "/" class="navbar-link">
          <span>My account &nbsp;</span>
          <span class="icon is-small"><i class="fa fa-address-book" aria-hidden="true"></i></span>
        </a>
  
        <!-- Profile -->
        <div class="navbar-dropdown">
          <a href = "/" class="navbar-item">Profile</a>
          <hr class="navbar-divider">
          <Link to = "login" class="navbar-item">Log in</Link>
          <Link to = "register" class="navbar-item">Sing up</Link>
        </div>
      </div>
    </div>
  </div>

  
</div>
</nav>
<hr class="navbar-divider">




