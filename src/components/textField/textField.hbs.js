export default `
<div class="{{className}}">
    <p class="text_field__helper">{{helperText}}</p>
    <input class="text-field__input" type="{{type}}" id="{{name}}" name="{{name}}" placeholder="{{placeholder}}" {{required}} />
    <label class="text-field__label" for="{{name}}">{{label}}</label>
</div>
`;
