<script>
    import ProductCard1 from '../components/product-card1.svelte';
    import { Container, Row, Col, MaterialApp } from 'svelte-materialify';
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


<style>
    .title {
        text-align: center;
        font-size: 20px;
        margin-bottom: 20px;
    }

</style>




{#if computers.length > 0}

    <Container>
        <br>
        <h1 class="title">| {computers.length} items |</h1>
    </Container>
    <MaterialApp>
         <Row>
            {#each computers as result}
                <Col>
                    <ProductCard1  productInfo ={result}/>
                </Col>
             {/each}
        </Row>
    </MaterialApp>
{:else}
    <div class="message-body">No results found</div>
    
{/if}