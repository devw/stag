import html from "./popup.template.html";
console.log(html);

const templates = [];

templates.push(`
    <script id="headertmpl" type="text/x-dot-template">
        <h1>{{=it.title}}</h1>
    </script>
`);

templates.push(`
    <script id="pagetmpl" type="text/x-dot-template">
        <h2>Here is the page using a header template</h2>
        {{#def.header}}
        {{=it.name}}
    </script>
`);

module.exports = { templates };
