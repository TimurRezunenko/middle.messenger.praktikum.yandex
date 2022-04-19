import { login } from '../pages/login/login';
import { registration } from '../pages/registration/registration';
import { error } from '../pages/error/error';
import { chat } from '../pages/chat/chat';
import { chats } from '../pages/chats/chats';

const pageRouter = () => {
    const path = window.location.pathname.substr(1);

    switch (path) {
        case 'chat':
            return chat();
        case 'chats':
            return chats();
        case 'login':
            return login();
        case 'registration':
            return registration();
        case '500':
            return error({
                error: 500,
                description: 'Небольшая заминка на нашем сервере. Уже чиним!',
            });
    }

    return error({
        error: 404,
        description: 'Упс.. Похоже, что страницы не существует',
    });
};

export default pageRouter;
