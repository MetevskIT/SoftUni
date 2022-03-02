async function loadCommits() {
    let username = document.getElementById('username');

    let repo = document.getElementById('repo');

    let commits = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.status)
        }

        let result = await response.json();
        
        commits.replaceChildren();
        result.forEach(element => {
            let liEl = document.createElement('li');
            liEl.textContent = `${element.commit.author.name}:${element.commit.message}`
            commits.appendChild(liEl)
        });


    } catch (error) {

        let liEl = document.createElement('li');
        liEl.textContent = `Error: ${error.message} (Not found!)`
        commits.replaceChildren(liEl);
    }




}