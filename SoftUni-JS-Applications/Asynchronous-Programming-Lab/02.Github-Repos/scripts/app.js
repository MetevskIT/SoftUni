function loadRepos() {

	let username = document.getElementById('username');

	let url = `https://api.github.com/users/${username.value}/repos`

	let repos = document.getElementById('repos')

	fetch(url)
		.then(data => {
			if (data.status == 404) {
				throw new Error('404 not found')
			}
			return data.json()
		})
		.then(data => {
			repos.replaceChildren();
			data.forEach(element => {

				let liEl = document.createElement('li');

				let aEl = document.createElement('a');
				aEl.href = element.html_url;
				aEl.textContent = element.full_name;

				liEl.appendChild(aEl);
				repos.appendChild(liEl);
			});
		})
		.catch(error => {
			repos.textContent = error.message;
		})


}