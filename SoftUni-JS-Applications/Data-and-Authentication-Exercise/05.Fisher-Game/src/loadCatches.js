async function load(id) {

    let user = JSON.parse(localStorage.getItem('user'));
    let catches = document.getElementById('catches')
    catches.replaceChildren();
    document.getElementById('main').style.display = 'inline-block';

    let url = `http://localhost:3030/data/catches`;

    let response = await fetch(url);
    let result = await response.json();

    result.forEach(c => {

        let angler = c['angler'];
        let weight = c['weight'];
        let species = c['species'];
        let location = c['location'];
        let bait = c['bait'];
        let captureTime = c['captureTime'];
        let dataId = c['_ownerId'];
        let currCatchId = c['_id'];

        create(angler, weight, species, location, bait, captureTime, dataId, currCatchId);

    });

    function create(angler, weight, species, location, bait, captureTime, dataId, currCatchId) {

        let div = document.createElement('div');
        div.classList.add('catch');

        let labelAngler = document.createElement('label');
        labelAngler.textContent = 'Angler';

        let inputAngler = document.createElement('input');
        inputAngler.type = "text";
        inputAngler.classList.add('angler');
        inputAngler.value = angler;

        let labelWeight = document.createElement('label');
        labelWeight.textContent = 'Weight';

        let inputWeight = document.createElement('input');
        inputWeight.type = "text";
        inputWeight.classList.add('weight');
        inputWeight.value = weight;

        let labelSpecies = document.createElement('label');
        labelSpecies.textContent = 'Species';

        let inputSpecies = document.createElement('input');
        inputSpecies.type = "text";
        inputSpecies.classList.add('species');
        inputSpecies.value = species;

        let labelLocation = document.createElement('label');
        labelLocation.textContent = 'Location';

        let inputLocation = document.createElement('input');
        inputLocation.type = "text";
        inputLocation.classList.add('location');
        inputLocation.value = location;

        let labelBait = document.createElement('label');
        labelBait.textContent = 'Bait';

        let inputBait = document.createElement('input');
        inputBait.type = "text";
        inputBait.classList.add('bait');
        inputBait.value = bait;

        let labelCapture = document.createElement('label');
        labelCapture.textContent = 'Capture Time';

        let inputCapture = document.createElement('input');
        inputCapture.type = "number";
        inputCapture.classList.add('captureTime');
        inputCapture.value = captureTime;

        let updateBtn = document.createElement('button')
        updateBtn.classList.add('update');
        updateBtn.textContent = 'Update';
        updateBtn.setAttribute('data-id', dataId);
        updateBtn.addEventListener('click', async () => {
            if (!inputAngler.value || !inputWeight.value || !inputSpecies.value || !inputLocation.value || !inputBait.value || !inputCapture.value) {
                alert('Fill all inputs')
                return;
            }

            let currCatch = {
                angler: inputAngler.value,
                weight: inputWeight.value,
                species: inputSpecies.value,
                location: inputLocation.value,
                bait: inputBait.value,
                captureTime: inputCapture.value,
            }

            let updateUrl = `http://localhost:3030/data/catches/${currCatchId}`


            let updateRequest = await fetch(updateUrl, {

                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'X-Authorization': `${user.accessToken}`
                },
                body: JSON.stringify(currCatch)
            })

            load(id);
        })

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('data-id', dataId);
        deleteBtn.addEventListener('click', async () => {

            let delUrl = `http://localhost:3030/data/catches/${currCatchId}`

            let deleteRequest = await fetch(delUrl, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'X-Authorization': `${user.accessToken}`
                }
            })
            load(id);
        })

        div.appendChild(labelAngler)
        div.appendChild(inputAngler)

        div.appendChild(labelWeight)
        div.appendChild(inputWeight)

        div.appendChild(labelSpecies)
        div.appendChild(inputSpecies)

        div.appendChild(labelLocation)
        div.appendChild(inputLocation)

        div.appendChild(labelBait)
        div.appendChild(inputBait)

        div.appendChild(labelCapture)
        div.appendChild(inputCapture)

        div.appendChild(updateBtn)
        div.appendChild(deleteBtn)

        catches.appendChild(div);

        if (id != dataId || id == undefined) {
            updateBtn.disabled = true;
            deleteBtn.disabled = true;
        }
    }

}
export { load };