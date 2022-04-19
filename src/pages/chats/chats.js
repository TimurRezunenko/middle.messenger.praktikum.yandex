'use strict';
import Handlebars from 'handlebars';

import tmpl from './chats.hbs';
import { appBar } from '../../components/appBar/appBar';
import './chats.pcss';

const chatList = [
    {
        name: 'Андрей',
        message: 'Привет! Как у тебя дела?',
        newMessage: 3,
        lastTime: '10:49',
    },
    {
        name: 'Максим',
        message: 'Изображение',
        newMessage: 3,
        lastTime: '10:44',
    },
    {
        name: 'Валера',
        message: 'Вы: Валера, настало твое время!',
        newMessage: 0,
        lastTime: '10:55',
    },
];

export const chats = (props) => {
    Handlebars.registerPartial('appBar', appBar({ title: 'Чаты' }));

    return Handlebars.compile(tmpl)({ ...props, data: chatList });
};
