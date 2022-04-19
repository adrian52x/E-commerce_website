<script>
    import ProductCard1 from '../components/product-card1.svelte';
    import { Container, Row, Col, MaterialApp } from 'svelte-materialify';
    import { allProducts } from '../store/generalStore';
    
    

    const s = "{#each Array(Math.floor($searchResultLength/2)+1) as _ , index}"
</script>




{#if $allProducts }
    <MaterialApp>    
         <Row>
            {#each $allProducts as result, i}
                <Col>
                    <ProductCard1  productInfo ={result}/>
                    <p> {i+ 1}</p>
                </Col>
             {/each}
        </Row>
    </MaterialApp>
{:else}
    <div class="message-body">No products found</div>
    
{/if}




