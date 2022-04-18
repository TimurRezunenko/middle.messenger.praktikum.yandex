"use strict";
import Handlebars from 'handlebars';

import tmpl from './button.hbs';
import './button.pcss';

export const button = ({ value, onClick, type = "button", className }) => {
    className = `button  ${className}`.trim();
    console.log(className);

    return Handlebars.compile(tmpl)({
        value,
        type,
        onClick,
        className
    });
}
