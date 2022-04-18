import { login } from '../pages/login/login';
import { registration } from '../pages/registration/registration';

const pageRouter = () => {
    const path = window.location.pathname.substr(1);

    switch (path) {
        case 'login':
            return login();
        case 'registration':
            return registration();
    }

    return '404';
};

export default pageRouter;
