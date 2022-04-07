import { html } from '../tools.js';
import { getUserFurniture } from '../services/http-services.js';
import { getId } from '../services/localUserData.js';

const myFurnitureTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${data.map(f => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${f.img}" />
                <p>${f.description}</p>
                <footer>
                    <p>Price: <span>${f.price} $</span></p>
                </footer>
                <div>
                    <a href='/details/${f._id}' class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
        `)}
    </div>
`

const myFurnitureView = async (ctx) => {
    let data = await getUserFurniture(getId());
    ctx.render(myFurnitureTemplate(data))
}
export {
    myFurnitureView
}