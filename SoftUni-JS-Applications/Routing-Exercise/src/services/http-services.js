const baseUrl = `http://localhost:3030`

async function loginUser(email, password) {
    let loginRequest = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    return loginRequest;

}

async function registerUser(email, password) {
    let registerRequest = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    return registerRequest;

}

async function logoutUser(auth) {
    await fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': auth,
        }
    })
}

async function getAllFurnitures() {

    let loadRequest = await fetch(`${baseUrl}/data/catalog`);
    let furnitures = await loadRequest.json();
    return furnitures;
}

async function getFurnitureDetails(id) {
    let getRequest = await fetch(`${baseUrl}/data/catalog/${id}`);
    let furniture = await getRequest.json();
    return furniture;
}

async function createFurniture(token, make, model, year, description, price, img, material) {

    await fetch(`${baseUrl}/data/catalog`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization':token,
        },
        body: JSON.stringify({
            make,
            model,
            year,
            description,
            price,
            img,
            material
        })
    })
}

async function deleteFurniture(id,auth) {
    await fetch(`${baseUrl}/data/catalog/${id}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'X-Authorization': auth
        }
    });

}

async function updateFurniture(token, make, model, year, description, price, img, material, id) {

    await fetch(`${baseUrl}/data/catalog/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization':token,
        },
        body: JSON.stringify({
            make,
            model,
            year,
            description,
            price,
            img,
            material
        })
    })
}

async function getUserFurniture(userId) {
    let loadRequest = await fetch(`${baseUrl}/data/catalog?where=_ownerId%3D%22${userId}%22`);
    let furnitures = await loadRequest.json();
    return furnitures;
}

export {
    getAllFurnitures,
    getFurnitureDetails,
    loginUser,
    registerUser,
    logoutUser,
    createFurniture,
    updateFurniture,
    getUserFurniture,
    deleteFurniture
}