export default `
<input 
    type={{type}} 
    value={{value}} 
    class="{{className}}"
    {{#if onClick}}
        onclick={{onClick}} 
    {{/if}}
/>
`;
