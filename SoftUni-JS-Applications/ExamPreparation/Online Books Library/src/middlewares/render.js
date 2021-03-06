import { render } from "../../node_modules/lit-html/lit-html.js";

function renderCtx(ctx, next) {
    ctx.render = (template) => render(template, document.getElementById('site-content'))
    next()
}

export {
    renderCtx
}