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
        margin-bottom: 20px;
    }

</style>




{#if $searchResultLength > 0}

    <Container>
        <br>
        <h1 class="title">Search result: <i>{$searchKeyword}</i> | {$searchResult.length} items</h1>
    </Container>
    <MaterialApp>
         <Row>
            {#each $searchResult as result, i}
                <Col>
                    <ProductCard1  productInfo ={result}/>
                    <p> {i+ 1}</p>
                </Col>
             {/each}
        </Row>
    </MaterialApp>
{:else}
    <div class="message-body">No results found: <i>{$searchKeyword}</i></div>
    
{/if}




