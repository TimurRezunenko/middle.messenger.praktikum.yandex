'use strict';
import Handlebars from 'handlebars';

import tmpl from './iconButton.hbs';
import './iconButton.pcss';

export const iconButton = ({
    value,
    onClick,
    type = 'button',
    className,
    icon,
}) => {
    className = `button  ${className}`.trim();

    return Handlebars.compile(tmpl)({
        value,
        type,
        onClick,
        className,
        icon,
    });
};
