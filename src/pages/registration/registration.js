"use strict";
import Handlebars from 'handlebars';

import tmpl from './registration.hbs';
import { textField } from '../../components/textField/textField';
import { button } from '../../components/button/button';
import './registration.pcss';

export const registration = () => {
    Handlebars.registerPartial("emailField", textField({
        name: 'email',
        label: 'Почта'
    }));
    Handlebars.registerPartial("loginField", textField({ name: 'login', label: 'Логин' }));
    Handlebars.registerPartial("firstNameField", textField({ name: 'firstName', label: 'Имя' }));
    Handlebars.registerPartial("lastNameField", textField({ name: 'lastName', label: 'Фамилия' }));
    Handlebars.registerPartial("phoneField", textField({ name: 'phone', label: 'Телефон' }));
    Handlebars.registerPartial("passwordField", textField({ name: 'password', label: 'Пароль', type: 'password' }));
    Handlebars.registerPartial("repeatPasswordField", textField({ name: 'repeatPassword', label: 'Пароль (еще раз)', type: 'password' }));
    Handlebars.registerPartial("register", button({ value: 'Зарегистрироваться', type: "submit", className: "registration-form__button" }));

    return Handlebars.compile(tmpl)({});
}
