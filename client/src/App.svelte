
<script>

    import { onMount } from 'svelte';
    import { baseURL, authenticatedUser, authenticated } from "./store/generalStore.js";

    import Nav from "./components/nav.svelte";
    import Footer from "./components/footer.svelte";
    import Dashboard from "./components/dashboard.svelte";
    import Login from "./pages/auth/Login.svelte";
    import Register from "./pages/auth/Register.svelte";
    import Profile from "./pages/auth/Profile.svelte";

    import { Router, Link, Route } from 'svelte-routing';
    import PCs from './pages/pcs.svelte';
    import Phones from './pages/phones.svelte';
    import TVs from './pages/tvs.svelte';
    import Gaming from './pages/gaming.svelte';
    import Watches from './pages/watches.svelte';
    import allProducts from './pages/allProducts.svelte';
    
    import Search from './pages/search.svelte';
    import ShoppingCart from './components/shopping-cart/cart.svelte';
    import Contact from './pages/contact.svelte';

    
    // get token
    //Get user data and save in store
    onMount(async () => {
        try {
            const response = await fetch(`${baseURL}/api/user`, {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            });

            const user = await response.json();

            if(response.status === 200){
                authenticated.set(true);
                authenticatedUser.set(user);
            }else{
                authenticated.set(false);
                authenticatedUser.set(null);
            }
        
            
        } catch (error) {
            authenticated.set(false);
            authenticatedUser.set(null);
        }

    });

</script>


<main>
	
    <Router>
        <Nav/>
        <div class="container">
            <Route path="/" component={Dashboard} />
            <Route path="category/computers" component={PCs} />
            <Route path="category/phones" component={Phones} />
            <Route path="category/tvs" component={TVs} />
            <Route path="category/gaming" component={Gaming} />
            <Route path="category/watches" component={Watches} />
            <Route path="category/all" component={allProducts} />

            <Route path="search" component={Search} />

            {#if $authenticated}
                <Route path="shopping-cart" component={ShoppingCart} />
                <Route path="contact" component={Contact} />
                <Route path="profile" component={Profile} />
            {:else}
                <Route path="shopping-cart" component={Login} />
                <Route path="contact" component={Login} />
                <Route path="profile" component={Login} />
            {/if}

            
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />

        </div>
    </Router>

   
   
    <Footer/>
</main>

<style>
	
    main{
        min-height: calc(100vh - 70px);
    }


</style>


