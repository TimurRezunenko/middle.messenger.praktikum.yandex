'use strict';
import Handlebars from 'handlebars';

import tmpl from './appBar.hbs';
import { iconButton } from '../iconButton/iconButton';

import './appBar.pcss';

export const appBar = () => {
    Handlebars.registerPartial('menuBtn', iconButton({}));
    Handlebars.registerPartial('noticeBtn', iconButton({}));
    Handlebars.registerPartial('searchBtn', iconButton({}));
    Handlebars.registerPartial('profileBtn', iconButton({}));

    return Handlebars.compile(tmpl)({ title: 'Чаты' });
};
