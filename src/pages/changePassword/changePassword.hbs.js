export default `
<div class="profile-page">
  <form action="/api/login" class="profile-form">  
      {{> header }}
      {{> oldPasswordField}}  
      {{> passwordField}}
      {{> repeatPasswordField}}
      <div class="profile-page__controls">
          {{> saveBtn}}
          {{> cancelBtn}}
      </div>
  </form>
</div>`;
