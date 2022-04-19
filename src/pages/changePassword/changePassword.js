import Handlebars from 'handlebars';

import tmpl from './changePassword.hbs';
import { textField } from '../../components/textField/textField';
import { button, ButtonVariant } from '../../components/button/button';

import './changePassword.pcss';
import { profileHeader } from '../profile/profileHeader/profileHeader';

export const changePassword = () => {
    Handlebars.registerPartial(
        'header',
        profileHeader({
            lastName: 'Резуненко',
            firstName: 'Тимур',
        })
    );
    Handlebars.registerPartial(
        'oldPasswordField',
        textField({
            name: 'oldPassword',
            label: 'Старый пароль',
            type: 'password',
            required: true,
        })
    );
    Handlebars.registerPartial(
        'passwordField',
        textField({
            name: 'newPassword',
            label: 'Новый пароль',
            type: 'password',
            required: true,
            error: true,
        })
    );
    Handlebars.registerPartial(
        'repeatPasswordField',
        textField({
            name: 'newPassword',
            label: 'Повторите новый пароль',
            type: 'password',
            required: true,
            error: true,
        })
    );
    Handlebars.registerPartial(
        'saveBtn',
        button({
            value: 'Сохранить',
            className: 'profile-page__btn',
        })
    );

    Handlebars.registerPartial(
        'cancelBtn',
        button({
            value: 'Отменить',
            variant: ButtonVariant.DEFAULT,
        })
    );

    return Handlebars.compile(tmpl)({
        lastName: 'Резуненко',
        firstName: 'Тимур',
    });
};
