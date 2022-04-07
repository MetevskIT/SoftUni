import { html } from '../tools.js';
import { isOwner } from '../services/localUserData.js';
import { getFurnitureDetails } from '../services/http-services.js';

const detailsTemplate = (isOwner,furnitureDetails) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${furnitureDetails.img}"/>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${furnitureDetails.make}</span></p>
        <p>Model: <span>${furnitureDetails.model}</span></p>
        <p>Year: <span>${furnitureDetails.year}</span></p>
        <p>Description: <span>${furnitureDetails.description}</span></p>
        <p>Price: <span>${furnitureDetails.price}</span></p>
        <p>Material: <span>${furnitureDetails.material}</span></p>
        <div style=${isOwner(furnitureDetails._ownerId)?"display:block;":"display:none;"}>
            <a href='/details/edit/${furnitureDetails._id}' class="btn btn-info">Edit</a>
            <a href='/details/delete/${furnitureDetails._id}' class="btn btn-red">Delete</a>
        </div>
    </div>
</div>
</div>`

const detailsView=async(ctx)=>{

    let furnitureDetails = await getFurnitureDetails(ctx.params.id);
    ctx.render(detailsTemplate(isOwner,furnitureDetails))
}
export{
     detailsView
}

