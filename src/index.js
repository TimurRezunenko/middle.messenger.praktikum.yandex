'use strict';
import pageRouter from './utils/pageRouter';

import './index.css';

(function () {
    const root = document.getElementById('root');
    root.innerHTML = pageRouter();
    // TODO сейчас это временная заглушка
    const chats = document.querySelectorAll('.chat');
    Array.prototype.slice
        .call(chats)
        .forEach((chat) =>
            chat.addEventListener(
                'click',
                () => (window.location.href = 'chat')
            )
        );
})();
