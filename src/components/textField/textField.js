'use strict';
import Handlebars from 'handlebars';

import tmpl from './textField.hbs';
import './textField.pcss';

export const textField = ({
    type = 'text',
    label = '',
    name = '',
    placeholder,
    error,
    helperText,
}) => {
    const helperClass = `text-field__helper${
        (error && `  text-field__helper--error`) || ''
    }`;

    return Handlebars.compile(tmpl)({
        type,
        label,
        name,
        error,
        helperClass,
        helperText,
        placeholder: placeholder === undefined ? label : placeholder,
    });
};
