'use strict';
import Handlebars from 'handlebars';

import tmpl from './textField.hbs';
import './textField.pcss';

export const textField = ({
    placeholder,
    error,
    helperText,
    className,
    type = 'text',
    label = '',
    name = '',
    required,
}) => {
    className = `text-field${(className && `  ${className}`) || ''}${
        (error && `  text-field--error`) || ''
    }`;

    return Handlebars.compile(tmpl)({
        type,
        label,
        name,
        error,
        className,
        helperText,
        ...(required && { required }),
        placeholder: placeholder === undefined ? label : placeholder,
    });
};
