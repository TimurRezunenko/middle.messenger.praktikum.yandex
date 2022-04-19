'use strict';
import Handlebars from 'handlebars';

import tmpl from './chat.hbs';
import { appBar } from '../../components/appBar/appBar';
import './chat.pcss';

const MessageType = {
    INBOX: 0,
    OUTBOX: 1,
};

const MessageStatus = {
    SENDED: 0,
    DELIVERED: 1,
    RECEIVED: 2,
};

const messages = [
    {
        message: 'Привет! Как дела? ',
        date: '10:49',
        type: MessageType.INBOX,
        status: MessageStatus.RECEIVED,
    },
    {
        message: 'И тебе не хворать! Все круто ',
        date: '10:50',
        type: MessageType.OUTBOX,
        status: MessageStatus.DELIVERED,
    },
    {
        message: 'Спасибо!',
        date: '10:50',
        type: MessageType.INBOX,
        status: MessageStatus.DELIVERED,
    },
];

export const chat = (props) => {
    Handlebars.registerPartial('appBar', appBar({ title: 'Тимур' }));

    return Handlebars.compile(tmpl)({
        ...props,
        data: messages.map((item) => ({
            ...item,
            className: `${
                item.type === MessageType.OUTBOX ? '  message--outbox' : ''
            }${
                item.status === MessageStatus.RECEIVED
                    ? '  message--delivered'
                    : ''
            }`,
        })),
    });
};
