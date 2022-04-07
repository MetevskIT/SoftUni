import { load } from './loadCatches.js'

let user = JSON.parse(localStorage.getItem('user'));


async function add(id) {

    let angler = document.querySelector('input[name="angler"]').value
    let weight = document.querySelector('input[name="weight"]').value
    let species = document.querySelector('input[name="species"]').value
    let location = document.querySelector('input[name="location"]').value
    let bait = document.querySelector('input[name="bait"]').value
    let captureTime = document.querySelector('input[name="captureTime"]').value
    if (!angler||!weight||!species||!location||!bait||!captureTime) {
        alert('Fill all inputs')
        return;
    }

    let currCatch = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,

    }
    let url = `http://localhost:3030/data/catches`;

    let createRequset = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'X-Authorization': `${user.accessToken}`
        },
        body: JSON.stringify(currCatch)
    })

    load(id)
}
export { add };