<script>
    import ProductCard1 from '../components/product-card1.svelte';
    import { onMount } from 'svelte';
    import { baseURL } from '../store/generalStore';
    import { Container, Row, Col, MaterialApp } from 'svelte-materialify';
    import { searchResultLength, searchResult, searchKeyword } from '../store/generalStore';
    
    

</script>

<style>
    .title {
        text-align: center;
        font-size: 20px;
    }

</style>




{#if $searchResultLength > 0}

    <Container>
        <br>
        <h1 class="title">Search result: "{$searchKeyword}" -> {$searchResultLength} items</h1>
    </Container>

    {#each Array(Math.floor($searchResultLength/2)+1) as _ , index}
    
        <Row>
            {#each $searchResult as result, i}
            
                <Col>
                    <ProductCard1  productInfo ={result}/>
                    <p> {i+ 1}</p>
                </Col>
                
            {/each}
        </Row>

    {/each}
{:else}
    <div class="message-body">No results found: "{$searchKeyword}"</div>
    
{/if}




