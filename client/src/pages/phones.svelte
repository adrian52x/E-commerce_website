<script>
    import { onMount } from 'svelte';
    import { baseURL } from '../store/generalStore';
    import axios from 'axios';
    
    const category = 'phones'
    let phones = [];
    
    onMount(async() => {
        const { data } = await axios.get(`${baseURL}/api/products/${category}`)
        phones = data.webshop_products;
        console.log(phones); 
        
    
    })

</script>


<div class="container">
    <br>
    <h1 class="title">Phones</h1>


</div>



<style>
    .title {
        text-align: center;
    }
</style>