export default `
<div class="profile-page">
  <form action="/api/login" class="profile-form">  
      {{> header }} 
      {{> emailField}}  
      {{> loginField}}
      {{> firstNameField}}
      {{> lastNameField}}
      {{> displayNameField }}
      {{> phoneField}}
      <div class="profile-page__controls">
          {{> changeBtn}}
          {{> changePasswordBtn }}
          {{> closeBtn}}
      </div>
  </form>
</div>`;
