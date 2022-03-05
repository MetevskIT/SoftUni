function solve() {

    let baseUrl = `http://localhost:3030/jsonstore/bus/schedule`;

    let currStop = 'depot'
    let curr = '';

    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let info = document.getElementById('info').children[0];

    async function depart() {
        try {

            let response = await fetch(baseUrl + `/${currStop}`);
            let result = await response.json();

            info.textContent = `Next stop ${result.name}`
            currStop = result.next;
            curr = result.name;
            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (error) {
            info.textContent = `Error`
            departBtn.disabled = true;
            arriveBtn.disabled = true;

        }

    }

    async function arrive() {
        info.textContent = `Arriving at ${curr}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
