<script>
import { Link } from 'svelte-routing';
import { baseURL } from '../../store/generalStore';

let email = '';
let password = '';

const submitLog = async () => {
    await fetch(`${baseURL}/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            email: email.toLowerCase(),
            password: password
        })
    });
    location.replace("/")
}
</script>

<style>
    .container {
        margin-top: 100px;
        margin-bottom: 300px;
        width: 500px;
    }
    
    .title {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
    }
</style>



  
      

  <!-- svelte-ignore a11y-label-has-associated-control -->
<div class="container">
  <h1 class="title">Login</h1>

  <form on:submit|preventDefault={submitLog} class="box">
    <div class="field">
      
      <label class="label"><i class="fas fa-envelope"></i>Email</label>
      <div class="control">
        <input bind:value={email} class="input" type="email" placeholder="e.g. jora@gmail.com" required>
        
      </div>
    </div>
          
    <div class="field">
        <label class="label"><i class="fas fa-lock"></i>Password</label>
        <div class="control">
          <input bind:value={password} class="input" type="password" placeholder="********" required>
          
        </div>
    </div>
          
    <button class="button is-primary"> Log in </button>
  </form>
</div>
         



