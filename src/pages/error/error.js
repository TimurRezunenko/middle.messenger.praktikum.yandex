'use strict';
import Handlebars from 'handlebars';

import tmpl from './error.hbs';
import { textField } from '../../components/textField/textField';
import { button } from '../../components/button/button';
import './error.pcss';

export const error = (props) => {
    Handlebars.registerPartial(
        'loginField',
        textField({ name: 'login', label: 'Логин' })
    );
    Handlebars.registerPartial(
        'passwordField',
        textField({ name: 'password', label: 'Пароль', type: 'password' })
    );
    Handlebars.registerPartial(
        'login',
        button({
            value: 'Войти',
            type: 'submit',
            className: 'login-form__button',
        })
    );

    return Handlebars.compile(tmpl)(props);
};
