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

async function getAllBooks() {

    let loadRequest = await fetch(`${baseUrl}/data/books?sortBy=_createdOn%20desc`);
    let books = await loadRequest.json();
    return books;
}

async function getBookDetails(id) {
    let getRequest = await fetch(`${baseUrl}/data/books/${id}`);
    let furniture = await getRequest.json();
    return furniture;
}

async function createBook(token, title, description, imageUrl, type) {

    await fetch(`${baseUrl}/data/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({
            title,
            description,
            imageUrl,
            type
        })
    })
}

async function deleteBook(id, auth) {
    await fetch(`${baseUrl}/data/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': auth
        }
    });

}

async function updateBook(id, token, title, description, imageUrl, type) {

    await fetch(`${baseUrl}/data/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({
            title,
            description,
            imageUrl,
            type
        })
    })
}

async function getUserBooks(userId) {
    let loadRequest = await fetch(`${baseUrl}/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    let books = await loadRequest.json();
    return books;
}

async function addLike(token, bookId) {
    await fetch(`${baseUrl}/data/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({
            bookId
        })
    })
}

async function getCountLikes(bookId) {

    let request = await fetch(`${baseUrl}/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
    let count = await request.json();
    return count;
}

async function isLiked(bookId, userId) {
    let request = await fetch(`${baseUrl}/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    let liked = await request.json()
    if (liked > 0) {
        return true;
    } else {

        return false;
    }

}

export {
    getAllBooks,
    getBookDetails,
    loginUser,
    registerUser,
    logoutUser,
    createBook,
    updateBook,
    getUserBooks,
    deleteBook,
    addLike,
    getCountLikes,
    isLiked
}