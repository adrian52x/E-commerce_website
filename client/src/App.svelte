

<script>
	
    import Nav from "./components/nav.svelte"
    import { baseURL } from "./store/generalStore.js";



    
    

    // TESTING FETCH
    fetch(`${baseURL}/api/products`)
            .then((Response) => Response.json())
            .then((data) => {
               console.log(data.webshop_products);    
               
               const test = document.querySelector(".test")
               test.innerHTML = data.total_products;
    });


  
    
    
    

</script>




<main>
	

    <Nav/>
    

    <div class="test">Hello</div>
    
    
</main>

<style>
	
</style>


