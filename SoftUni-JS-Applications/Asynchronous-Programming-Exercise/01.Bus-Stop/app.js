async function getInfo() {

    let stopId = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;

    try {

        let response = await fetch(url)

        if (response.status != 200) {
            throw new Error('Error');
        }

        let result = await response.json();

        stopName.textContent = result.name;
        buses.replaceChildren();
        for (const bus in result.buses) {

            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${bus} arrives in ${result.buses[bus]} minutes`;
            buses.appendChild(liEl);
        }

    } catch (error) {
        buses.replaceChildren();
        stopName.textContent = error.message;
    }


}
