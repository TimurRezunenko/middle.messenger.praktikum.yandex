'use strict';
import Handlebars from 'handlebars';

import tmpl from './registration.hbs';
import { textField } from '../../components/textField/textField';
import { button } from '../../components/button/button';

import './registration.pcss';

export const registration = () => {
    Handlebars.registerPartial(
        'emailField',
        textField({
            name: 'email',
            label: 'Почта',
        })
    );
    Handlebars.registerPartial(
        'loginField',
        textField({ name: 'login', label: 'Логин', required: true })
    );
    Handlebars.registerPartial(
        'firstNameField',
        textField({ name: 'firstName', label: 'Имя', required: true })
    );
    Handlebars.registerPartial(
        'lastNameField',
        textField({ name: 'lastName', label: 'Фамилия', required: true })
    );
    Handlebars.registerPartial(
        'phoneField',
        textField({ name: 'phone', label: 'Телефон', type: 'tel',
            required: true })
    );
    Handlebars.registerPartial(
        'passwordField',
        textField({ name: 'password', label: 'Пароль', type: 'password', required: true })
    );
    Handlebars.registerPartial(
        'repeatPasswordField',
        textField({
            name: 'repeatPassword',
            label: 'Пароль (еще раз)',
            type: 'password',
            required: true,
            error: true
        })
    );
    Handlebars.registerPartial(
        'register',
        button({
            value: 'Зарегистрироваться',
            type: 'submit',
            className: 'registration-form__button',
        })
    );

    return Handlebars.compile(tmpl)({});
};
