import Handlebars from 'handlebars';

import tmpl from './chat.hbs';
import { appBar } from '../../components/appBar/appBar';
import { iconButton } from '../../components/iconButton/iconButton';
import { ICONS } from '../../icons/icons';

import './chat.pcss';
import { textField } from '../../components/textField/textField';

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

const prepareMessages = (messages) => {
    return messages.map((item) => ({
        ...item,
        className: `${
            item.type === MessageType.OUTBOX ? '  message--outbox' : ''
        }${
            item.status === MessageStatus.RECEIVED ? '  message--delivered' : ''
        }`,
    }));
};

export const chat = (props) => {
    Handlebars.registerPartial('appBar', appBar({ title: 'Тимур' }));
    Handlebars.registerPartial(
        'smileBtn',
        iconButton({ icon: ICONS.SMILE, width: 24, type: 'button' })
    );
    Handlebars.registerPartial(
        'messageField',
        textField({
            name: 'message',
            placeholder: 'Сообщение',
            className: 'controls__message',
        })
    );
    Handlebars.registerPartial(
        'attachmentBtn',
        iconButton({ icon: ICONS.ATTACHMENT, width: 24, type: 'button' })
    );
    Handlebars.registerPartial(
        'micBtn',
        iconButton({ icon: ICONS.MIC, width: 24, type: 'button' })
    );

    return Handlebars.compile(tmpl)({
        ...props,
        data: prepareMessages(messages),
    });
};
