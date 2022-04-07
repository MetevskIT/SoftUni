import { html } from '../tools.js'
import { updateFurniture, getFurnitureDetails } from '../services/http-services.js';
import { getAccesToken } from '../services/localUserData.js';

const editTemplate = (edit, furniture) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${edit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make" .value=${furniture.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model" .value=${furniture.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year" .value=${furniture.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description"
                    .value=${furniture.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" .value=${furniture.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" .value=${furniture.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${furniture.material}>
            </div>
            <input type="submit" class="btn btn-primary" value="Edit" />
        </div>
    </div>
</form>`

const editView = async (ctx) => {

    let furniture = await getFurnitureDetails(ctx.params.id)

    async function edit(e) {
        e.preventDefault();
        let form = new FormData(e.currentTarget);

        let make = form.get('make');
        let model = form.get('model');
        let year = Number(form.get('year'));
        let description = form.get('description');
        let price = Number(form.get('price'));
        let img = form.get('img').trim();
        let material = form.get('material');
        if (make.length < 4) {
            alert('Make must be at least 4 symbols long!')
            return;
        }

        if (model.length < 4) {
            alert('Model must be at least 4 symbols long!')
            return;
        }

        if (year > 2050 || year < 1950) {
            alert('Year must be between 1950 and 2050!')
            return;
        }

        if (description.length < 10) {
            alert('Description must be more than 10 symbols')
            return;
        }

        if (price <= 0) {
            alert('The price must be positive number!')
            return;
        }

        if (!img || !material) {
            alert('You don\'t fill all fields!')
            return;
        }
        await updateFurniture(getAccesToken(), make, model, year, description, price, img, material, ctx.params.id)
        ctx.page.redirect('/dashboard')

    }
    ctx.render(editTemplate(edit, furniture))
}
export {
    editView
}