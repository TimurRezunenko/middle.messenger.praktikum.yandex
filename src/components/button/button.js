'use strict';
import Handlebars from 'handlebars';

import tmpl from './button.hbs';
import './button.pcss';

export const ButtonVariant = {
    DEFAULT: 0,
    OUTLINE: 1,
};

export const button = ({
    value,
    onClick,
    className,
    href,
    type = 'button',
    variant = ButtonVariant.OUTLINE,
}) => {
    className = `button  ${className}  ${
        (variant === ButtonVariant.OUTLINE && 'button--outlined') || ''
    }`.trim();

    return Handlebars.compile(tmpl)({
        value,
        type,
        onClick,
        className,
        href,
    });
};
