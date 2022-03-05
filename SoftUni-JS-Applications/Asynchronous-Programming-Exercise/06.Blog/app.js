function attachEvents() {

    let loadBtn = document.getElementById('btnLoadPosts');
    let posts = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComments = document.getElementById('post-comments');

    let postsUrl = `http://localhost:3030/jsonstore/blog/posts`;
    let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    loadBtn.addEventListener('click', async () => {

        let postResponse = await fetch(postsUrl);
        let postResult = await postResponse.json();

        posts.replaceChildren();
        for (const post in postResult) {

            let currOption = document.createElement('option');
            currOption.value = postResult[post].id;
            currOption.textContent = postResult[post].title.toUpperCase();
            posts.appendChild(currOption);
        }
    })

    viewBtn.addEventListener('click', async () => {
        
        postBody.replaceChildren();

        let options = document.querySelectorAll('option')

        let currOption = Array.from(options).find(x => x.selected == true)

        let currOptionResponse = await fetch(postsUrl + `/${currOption.value}`);

        let currOptionResult = await currOptionResponse.json();

        postTitle.textContent = currOption.textContent;

        let bodyContent = document.createElement('li');

        bodyContent.textContent = currOptionResult.body;
        postBody.appendChild(bodyContent)

        let commentsResponse = await fetch(commentsUrl);
        let commentsResult = await commentsResponse.json();

        let comments = Object.entries(commentsResult);

        comments = comments.filter(x => x[1].postId == currOption.value);

        postComments.replaceChildren();

        comments.forEach(x => {

            let currComment = document.createElement('li');
            currComment.id = x[1].id;
            currComment.textContent = x[1].text;
            postComments.appendChild(currComment);
        })

    })
}

attachEvents();