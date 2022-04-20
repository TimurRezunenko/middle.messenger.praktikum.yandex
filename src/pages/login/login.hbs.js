export default `
<div class="login-page">
  <form action="/api/login" class="login-form">
      <h1 class="login-form__title">Вход</h1>  
      {{> loginField}}
      {{> passwordField}}
      <div class="login-form__controls">
          {{> login}}
          <a href="registration" class="login-form__link" title="Register">Нет аккаунта? Зарегистрироваться</a>
      </div>
  </form>
</div>`;
