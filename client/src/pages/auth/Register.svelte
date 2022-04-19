<script>

    import { baseURL } from '../../store/generalStore';

    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';

    const submitReg = async () => {
        await fetch(`${baseURL}/api/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email.toLowerCase(),
                password: password
            })
        });
        location.replace("/login")
    }


</script>

<style>
    .container {
        margin-top: 100px;
        margin-bottom: 200px;
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
  <h1 class="title">Register</h1>

  <form on:submit|preventDefault={submitReg} class="box">
    <div class="field">
      <label class="label">First name</label>
      <div class="control">
        <input bind:value={firstName} class="input" type="text" required>
      </div>
    </div>

    <div class="field">
        <label class="label">Last name</label>
        <div class="control">
          <input bind:value={lastName} class="input" type="text" required>
        </div>
    </div>

    <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input bind:value={email} class="input" type="email" placeholder="e.g. jora@gmail.com" required>
        </div>
    </div>
          
    <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input bind:value={password} class="input" type="password" placeholder="********" required>
        </div>
    </div>
    <hr>     
    <button class="button is-primary">Register</button>
  </form>
</div>
         



