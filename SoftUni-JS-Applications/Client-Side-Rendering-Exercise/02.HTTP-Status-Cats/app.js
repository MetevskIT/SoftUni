import { render, html } from '../node_modules/lit-html/lit-html.js'
import { cats } from './catSeeder.js'
function loadCats() {

    let catsContainer = document.getElementById('allCats');

    const template = () => html`
    <ul>
        ${cats.map(c => html`
        <li>
            <img src=./images/${c.imageLocation}.jpg width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${toggle}>Show status code</button>
                <div class="status" style="display: none" id="100">
                    <h4>Status Code: ${c.statusCode}</h4>
                    <p>${c.statusMessage}</p>
                </div>
            </div>
        </li>`
    )}
    </ul>`
    function toggle(e) {

        if (e.currentTarget.parentNode.querySelector('.status').style.display == 'none') {
            e.currentTarget.parentNode.querySelector('.status').style.display = 'block';

        } else {

            e.currentTarget.parentNode.querySelector('.status').style.display = 'none';

        }
    }


    render(template(), catsContainer)

}

loadCats()