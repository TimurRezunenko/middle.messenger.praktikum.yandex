export default `
<div class="chats-page">
    {{> appBar}}
    {{#each data}}
        <div class="chat">
            <img class="chat__avatar" src="https://via.placeholder.com/48" height="48" width="48" />
            <div class="chat__content">
                <p class="chat__name">{{name}}</p>
                <p class="chat__message">{{message}}</p>
            </div>    
            <div class="chat__info">
                <p class="chat__time">{{lastTime}}</p>
                <p class="chat__message-count">{{newMessage}}</p>
            </div>   
        </div>
    {{/each}}
    <div class="chats_page__end">
      <span>Чатов больше нет! Начните </span><a href="/" class="chats-page__new" title="Add new chat">новый!</a>
    </div>
</div>`;
