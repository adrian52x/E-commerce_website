<script>
  // default for Categories DROP DOWN 
  let active = "false";

  function isActive() {
    if(active === 'active'){
      active = 'false'
      } else {
      active = 'active'
      }
  }




</script>

<style>

  

  #categories_link, .navbar-item {
    font-size: 20px;
    font-family: "Lucida Console", "Courier New", monospace;
  }

  #categories_dropdown {
    font-size: 20px;
  }

</style>

<!-- svelte-ignore a11y-no-redundant-roles -->
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">


      <div id="categories_link" class="navbar-item has-dropdown is-{active}">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a  on:click={() => isActive()} class="navbar-link">Categories</a>
    
        <div id="categories_dropdown" class="navbar-dropdown">
          <a href = "/" class="navbar-item">Computers</a>
          <a href = "/" class="navbar-item">Mobiles</a>
          <a href = "/" class="navbar-item">TVs</a>
          <a href = "/" class="navbar-item">Gaming</a>
          <a href = "/" class="navbar-item">Watches</a>
          <hr class="navbar-divider">
          <div class="navbar-item">My account</div>
          <a href = "/" class="navbar-item">Log in</a>
          <a href = "/" class="navbar-item">Sing up</a>
        </div>
      </div>

      <!-- svelte-ignore a11y-missing-attribute LOGO-->
      <a class="navbar-item" href="/"> <img src="logo8.jpg" width="150" height="50"></a>
    </div>



<div class="navbar-menu">
  <div class="navbar-start">
    
    <div class="panel-block ">
      <p class="control has-icons-right">
        <input class="input" type="text" placeholder="Search">
        <span class="icon is-right">
          <span class="icon">
            <a href = "/" class="fas fa-search">`</a>
          </span>
        </span>
      </p>
    </div>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      
      <a href = "/" class="navbar-item">
        <span>Shopping cart &nbsp;</span>
        <span class="icon is-small"><i class="fas fa-cart-arrow-down"></i></span>
      </a>

      <a href = "/" class="navbar-item">
        <span>Contact us &nbsp;</span>
        <span class="icon is-small"><i class="fa fa-envelope-open" aria-hidden="true"></i></span>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a href = "/" class="navbar-link">
          <span>My account &nbsp;</span>
          <span class="icon is-small"><i class="fa fa-address-book" aria-hidden="true"></i></span>
        </a>
  
        <div class="navbar-dropdown">
          <a href = "/" class="navbar-item">Profile</a>
          <hr class="navbar-divider">
          <a href = "/" class="navbar-item">Log in</a>
          <a href = "/" class="navbar-item">Sing up</a>
        </div>
      </div>
    </div>
  </div>

  
</div>
</nav>
<hr class="navbar-divider">




