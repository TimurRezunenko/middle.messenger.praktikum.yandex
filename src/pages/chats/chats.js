'use strict';
import Handlebars from 'handlebars';

import tmpl from './chats.hbs';
import { appBar } from '../../components/appBar/appBar';
import './chats.pcss';

export const chats = (props) => {
    Handlebars.registerPartial('appBar', appBar({}));

    return Handlebars.compile(tmpl)(props);
};
