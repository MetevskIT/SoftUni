import { render } from "../tools.js"

function renderCtx(ctx, next) {
  ctx.render = (template) => render(template, document.getElementsByClassName('container')[0])
    next()
}

export{
    renderCtx
}