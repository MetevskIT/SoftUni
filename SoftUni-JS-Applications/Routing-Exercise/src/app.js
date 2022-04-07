import * as tools from './tools.js';
import * as pages from './views/viewsController.js'
import { renderCtx } from './middlewares/render.js'

tools.page(renderCtx)
tools.page(pages.navigationView)
tools.page('/dashboard', pages.dashboardView)
tools.page('/details/edit/:id',pages.editView)
tools.page('/details/delete/:id',pages.del)
tools.page('/details/:id', pages.detailsView)
tools.page('/', pages.dashboardView);
tools.page('/login', pages.loginView)
tools.page('/register', pages.registerView)
tools.page('/logout', pages.logout)
tools.page('/myfurniture',pages.myFurnitureView)
tools.page('/create',pages.createView)

tools.page.start();