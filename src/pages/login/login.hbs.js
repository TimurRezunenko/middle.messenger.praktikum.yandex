export default `
<div class="login-page">
  <form action="/api/login" class="login-form">
      <h1 class="login-form__title">Вход</h1>  
      {{> loginField}}
      {{> passwordField}}
      {{> login}}
      <a href="registration" class="login-form__link">Нет аккаунта? Зарегистрироваться</a>
  </form>
</div>`;
