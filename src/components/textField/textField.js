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
    required,
}) => {
    const className = `text-field${(error && `  text-field--error`) || ''}`;

    return Handlebars.compile(tmpl)({
        type,
        label,
        name,
        error,
        className,
        helperText,
        required,
        placeholder: placeholder === undefined ? label : placeholder,
    });
};
