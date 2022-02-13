window.addEventListener('load', solve);

function solve() {
    let gendre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    let collectionOfSongs = document.getElementsByClassName('all-hits-container')[0];

    let savedSongs = document.getElementsByClassName('saved-container')[0];

    let likes = document.getElementsByClassName('likes')[0];
    let totleLikes = 0;

    function add(e) {
        e.preventDefault();
        if (!gendre.value || !name.value || !author.value || !date.value) {
            return;
        }
        let hitsInfo = document.createElement('div');
        hitsInfo.className = 'hits-info';

        let img = document.createElement('img');
        img.src = './static/img/img.png';

        let genreh2 = document.createElement('h2');
        genreh2.textContent = `Genre: ${gendre.value}`;

        let nameh2 = document.createElement('h2');
        nameh2.textContent = `Name: ${name.value}`;

        let authorh2 = document.createElement('h2');
        authorh2.textContent = `Author: ${author.value}`;

        let dateh3 = document.createElement('h3');
        dateh3.textContent = `Date: ${date.value}`;

        let saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', save)

        let likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', like)

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong)

        hitsInfo.appendChild(img);
        hitsInfo.appendChild(genreh2);
        hitsInfo.appendChild(nameh2);
        hitsInfo.appendChild(authorh2);
        hitsInfo.appendChild(dateh3);
        hitsInfo.appendChild(saveBtn);
        hitsInfo.appendChild(likeBtn);
        hitsInfo.appendChild(deleteBtn);

        collectionOfSongs.appendChild(hitsInfo);
       
        gendre.value='';

        name.value='';

        author.value='';

        date.value='';


    }

    function save(e) {
        let curr = e.currentTarget.parentNode;
        curr.children[5].remove()
        curr.children[5].remove();
        savedSongs.appendChild(curr);

       // e.currentTarget.parentNode.remove();
    }

    function like(e) {
        e.currentTarget.disabled = true;
        totleLikes++;
        likes.children[0].textContent = `Total Likes: ${totleLikes}`;
    }

    function deleteSong(e) {
        e.currentTarget.parentNode.remove();
    }


}