import Handlebars from 'handlebars';

import tmpl from './profile.hbs';
import { textField } from '../../components/textField/textField';
import { button, ButtonVariant } from '../../components/button/button';
import { profileHeader } from './profileHeader/profileHeader';

import './profile.pcss';

export const profile = () => {
    Handlebars.registerPartial(
        'header',
        profileHeader({
            lastName: 'Резуненко',
            firstName: 'Тимур',
        })
    );
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
        textField({ name: 'first_name', label: 'Имя', required: true })
    );
    Handlebars.registerPartial(
        'lastNameField',

        textField({ name: 'second_name', label: 'Фамилия', required: true })
    );
    Handlebars.registerPartial(
        'phoneField',
        textField({
            name: 'phone',
            label: 'Телефон',
            type: 'tel',
            required: true,
        })
    );
    Handlebars.registerPartial(
        'displayNameField',
        textField({ name: 'display_name', label: 'Логин', required: true })
    );

    Handlebars.registerPartial(
        'changeBtn',
        button({
            value: 'Изменить данные',
            className: 'profile-page__btn',
        })
    );
    Handlebars.registerPartial(
        'changePasswordBtn',
        button({
            value: 'Сменить пароль',
            href: 'change-password',
            className: 'profile-page__btn',
        })
    );

    Handlebars.registerPartial(
        'closeBtn',
        button({
            value: 'Выйти',
            href: 'chats',
            variant: ButtonVariant.DEFAULT,
        })
    );

    return Handlebars.compile(tmpl)({
        lastName: 'Резуненко',
        firstName: 'Тимур',
    });
};
