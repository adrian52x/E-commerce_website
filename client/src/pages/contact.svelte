<script>
    import { Tooltip } from 'svelte-materialify';
    import { authenticatedUser } from '../store/generalStore';
    import { baseURL } from '../store/generalStore';

    let fullName = $authenticatedUser.first_name + ' ' + $authenticatedUser.last_name;
    let email = $authenticatedUser.email;
    let subject;
    let message;


    let submitMailNotifi = false;
    const submitMail = async () => {
      //Sent mail notification (5s)
      submitMailNotifi = !submitMailNotifi;
        
      if(submitMailNotifi){
          setTimeout(() => {
            submitMailNotifi = false;
          }, 5000);   
      }  
           
      await fetch(`${baseURL}/api/sendmail`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fullName,
            email: email,
            subject: subject,
            message: message
            })   
      });   
        
    }

</script>

<style>
    .title {
        text-align: center;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .container {
      margin-top: 60px;
    }

    .tooltip {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
    }
</style>




<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="container">
  <form on:submit|preventDefault={submitMail} class="box">
          <br>
          <h1 class="title">Contact form</h1>
          <br>

          <div class="field is-grouped tooltip">
            <div class="control">
              <Tooltip color="#008000" top bind:active={submitMailNotifi}>
                <span slot="tip" >Your message has been sent</span>
              </Tooltip>
            </div>
          </div>

  <fieldset disabled>      
      <div class="field">
          <label class="label">Full name</label>
          <div class="control">
            <input class="input" type="text" bind:value={fullName} placeholder="Your name" >
          </div>
      </div>
        
      <div class="field">
          <label class="label">Your Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" bind:value={email} placeholder="Email input" >
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
      </div> 
  </fieldset>

      <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <input class="input" type="text" bind:value={subject} placeholder="Your problem" required>
          </div>
      </div>
        
      <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" bind:value={message} placeholder="Your problem explained" required ></textarea>
          </div>
      </div>
          
        
      <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
      </div>

      

      
    </form>
    
</div>