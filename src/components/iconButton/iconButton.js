'use strict';
import Handlebars from 'handlebars';

import tmpl from './iconButton.hbs';
import './iconButton.pcss';

const DEFAULT_ICON_WIDTH = 24;

export const iconButton = ({
    value,
    onClick,
    className,
    icon,
    height,
    href,
    width = DEFAULT_ICON_WIDTH,
    type = 'button',
}) => {
    className = `button  ${className}`.trim();
    if (!height) {
        height = width;
    }

    return Handlebars.compile(tmpl)({
        value,
        type,
        onClick,
        className,
        icon,
        width,
        height,
        href,
    });
};
