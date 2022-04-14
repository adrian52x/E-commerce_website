
<script>

    import { baseURL } from "./store/generalStore.js";
    import Nav from "./components/nav.svelte";
    import Footer from "./components/footer.svelte";
    import Dashboard from "./components/dashboard.svelte";
    import Login from "./components/login.svelte"; 


    
    

    // TESTING FETCH
    //fetch(`${baseURL}/api/products`)
          //  .then((Response) => Response.json())
         //   .then((data) => {
           //    console.log(data.webshop_products);    
            
  //  });



</script>




<main>
	

    <Nav/>
    <Dashboard/>
    

    
    <Footer/>
</main>

<style>
	
</style>


