export default `
<div class="change-password-page">
  <form action="/api/login" class="change-password-form">  
      {{> header }}
      {{> oldPasswordField}}  
      {{> passwordField}}
      {{> repeatPasswordField}}
      <div class="change-password-page__controls">
          {{> saveBtn}}
          {{> cancelBtn}}
      </div>
  </form>
</div>`;
