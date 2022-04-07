import page from '../node_modules/page/page.mjs'
import { navigationView } from './views/navbar.js'
import { renderCtx } from './middlewares/render.js'
import { loginView } from './views/loginView.js'
import { registerView } from './views/registerView.js'
import { logout } from './views/logoutView.js'
import { createView } from './views/createView.js'
import { dashboardView } from './views/dashboardView.js'
import { detailsView } from './views/detailsBookView.js'
import { editView } from './views/editBookView.js'
import { deleteView } from './views/deleteBookView.js'
import { myBookView } from './views/myBooksView.js'


page(renderCtx)
page(navigationView)
page("/", dashboardView)
page("/login", loginView)
page("/register", registerView)
page("/logout", logout)
page("/addbook", createView)
page("/details/:id", detailsView)
page("/details/delete/:id", deleteView)
page("/details/edit/:id", editView)
page("/mybooks", myBookView)
page.start()