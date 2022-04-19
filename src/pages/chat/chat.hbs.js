export default `
<div class="chat-page">
    {{> appBar}}
    <div class="messages">
        {{#each data}}
            <div class="message{{className}}">
                {{message}}
                <div class="message__time">
                     {{date}}
                </div>
            </div>
        {{/each}}
    </div>
</div>`;
