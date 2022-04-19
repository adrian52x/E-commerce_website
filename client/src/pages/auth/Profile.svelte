<script>

    import { authenticatedUser } from '../../store/generalStore';


</script>


<style>
   .container {
      margin-top: 30px;
      min-height: calc(100vh - 70px);
    }
</style>

<div class="container">
    <div class="box">

        <article class="message">
            <div class="message-header">
              <p><i>{$authenticatedUser.first_name}'s</i> profile information</p>
            </div>
            <div class="message-body">
             

              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{$authenticatedUser.first_name} {$authenticatedUser.last_name}</p>
                    <p class="subtitle is-6">{$authenticatedUser.email}</p>
                  </div>
                </div>
                <br>
                <div class="content">
                  some kind of content here...
                  
                  <br>
          
                </div>
              </div>


            </div>
        </article>

    </div>
</div>


