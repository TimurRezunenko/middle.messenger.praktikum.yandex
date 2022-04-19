'use strict';
import Handlebars from 'handlebars';

import tmpl from './appBar.hbs';
import { iconButton } from '../iconButton/iconButton';
import { ICONS } from '../../icons/icons';

import './appBar.pcss';

export const appBar = ({ title }) => {
    Handlebars.registerPartial('menuBtn', iconButton({ icon: ICONS.BURGER }));
    Handlebars.registerPartial('noticeBtn', iconButton({ icon: ICONS.BELL }));
    Handlebars.registerPartial('searchBtn', iconButton({ icon: ICONS.SEARCH }));
    Handlebars.registerPartial(
        'profileBtn',
        iconButton({ icon: ICONS.PROFILE, href: 'profile' })
    );

    return Handlebars.compile(tmpl)({ title });
};
