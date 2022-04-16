<script>
    import { onMount } from 'svelte';
    import { baseURL } from '../store/generalStore';
    import axios from 'axios';
    
    const category = 'PCs'
    let computers = [];
    
    onMount(async() => {
        const { data } = await axios.get(`${baseURL}/api/products/${category}`)
        computers = data.webshop_products;
        console.log(computers); 
        
    
    })

</script>


<div class="container">
    <br>
    <h1 class="title">Computers</h1>


</div>



<style>
    .title {
        text-align: center;
    }
</style>