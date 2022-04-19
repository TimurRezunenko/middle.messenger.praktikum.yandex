export default `
<header class="profile-header"> 
    <label for="avatar" class="profile-header__avatar">
        <img class="profile-header__avatar" src="https://via.placeholder.com/64" height="64" width="64" />
        <input type="file" id="avatar" name="avatar" hidden>
    </label>
    <div>
        <p class="profile-header__text">{{firstName}}</p>
        <p class="profile-header__text">{{lastName}}</p>
    </div>
</header>
`;
