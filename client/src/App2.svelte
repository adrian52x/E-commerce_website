<script>
	export let name;


	fetch('http://localhost:3000/api/products')
            .then((Response) => Response.json())
            .then((data) => {
               console.log(data.webshop_products[1].title);
				
			   const myOutput = data.webshop_products[1].title;
               document.getElementById("test").innerText = "Output: " + myOutput;
              
    });
	
	

</script>




<main>
	<h1>Hello {name}!</h1>
	<h2 id = "test"> </h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>


<!-- svelte-ignore a11y-no-redundant-roles -->
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
	  		<a class="navbar-item" href="https://bulma.io">
				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
	  		</a>
  
	  		<!-- svelte-ignore a11y-missing-attribute -->
	  		<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
				<span aria-hidden="true"> </span>
				<span aria-hidden="true"> </span>
				<span aria-hidden="true"> </span>
	  		</a>
		</div>
  
	<div id="navbarBasicExample" class="navbar-menu">
	  <div class="navbar-start">
		<a class="navbar-item">Home</a>
  
		<a class="navbar-item">
		  Documentation
		</a>
  
		<div class="navbar-item has-dropdown is-hoverable">
		  <a class="navbar-link">
			More
		  </a>
  
		  <div class="navbar-dropdown">
			<a class="navbar-item">
			  About
			</a>
			<a class="navbar-item">
			  Jobs
			</a>
			<a class="navbar-item">
			  Contact
			</a>
			<hr class="navbar-divider">
			<a class="navbar-item">
			  Report an issue
			</a>
		  </div>
		</div>
	  </div>
  
	  <div class="navbar-end">
		<div class="navbar-item">
		  <div class="buttons">
			<a class="button is-primary">
			  <strong>Sign up</strong>
			</a>
			<a class="button is-light">
			  Log in
			</a>
		  </div>
		</div>
	  </div>
	</div>
  </nav>



  {#each Array(15) as _, i}
    <SlideItem let:active>
      <div class="rounded" class:primary-color={active} use:Ripple>{i + 1}</div>
    </SlideItem>
    {/each}