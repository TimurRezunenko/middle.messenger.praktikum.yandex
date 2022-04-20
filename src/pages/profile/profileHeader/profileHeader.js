import Handlebars from 'handlebars';

import tmpl from './profileHeader.hbs';

import './profileHeader.pcss';

export const profileHeader = (props) => {
    return Handlebars.compile(tmpl)(props);
};
