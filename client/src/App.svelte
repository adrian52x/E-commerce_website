
<script>

    import { baseURL } from "./store/generalStore.js";
    import Nav from "./components/nav.svelte";
    import Footer from "./components/footer.svelte";
    import Dashboard from "./components/dashboard.svelte";
    import Login from "./pages/auth/Login.svelte";
    import Register from "./pages/auth/Register.svelte";

    import { Router, Link, Route } from 'svelte-routing';
    import PCs from './pages/pcs.svelte';
    import Phones from './pages/phones.svelte';
    import TVs from './pages/tvs.svelte';
    import Gaming from './pages/gaming.svelte';
    import Watches from './pages/watches.svelte';
    import Search from './pages/search.svelte';
    


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

            <Route path="search" component={Search} />

            <Route path="login" component={Login} />
            <Route path="register" component={Register} />

        </div>
    </Router>

   
   
    


    

    
    <Footer/>
</main>

<style>
	
</style>


