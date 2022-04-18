export default `
<div class="registration-page">
  <form action="/api/login" class="registration-form">
      <h1 class="registration-form__title">Регистрация</h1>
      {{> emailField}}  
      {{> loginField}}
      {{> firstNameField}}
      {{> lastNameField}}
      {{> phoneField}}
      {{> passwordField}}
      {{> repeatPasswordField}}
      <div class="registration-form__controls">
          {{> register}}
          <a href="login" class="registration-form__link">Войти</a>
      </div>
  </form>
</div>`;
