function attachEventsListeners() {
    let input = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');

    let output = document.getElementById('outputDistance');
    let outputUnits = document.getElementById('outputUnits');

    let button = document.getElementById('convert');
    button.addEventListener('click', convert);

    function convert() {
        let inputValue = Number(input.value);
        switch (inputUnits.value) {
            case 'km':
                inputValue *= 1000;
                break;
            case 'cm':
                inputValue /= 100;
                break;
            case 'mm':
                inputValue = inputValue / 100 / 10;
                break;
            case 'mi':
                inputValue *= 1609.34;
                break;
            case 'yrd':
                inputValue *= 0.9144;
                break;
            case 'ft':
                inputValue *= 0.3048;
                break;
            case 'in':
                inputValue *= 0.0254;
                break;
        }

        switch (outputUnits.value) {
            case 'km':
                inputValue /= 1000;
                break;
            case 'cm':
                inputValue *= 100;
                break;
            case 'mm':
                inputValue = inputValue * 100 * 10;
                break;
            case 'mi':
                inputValue /= 1609.34;
                break;
            case 'yrd':
                inputValue /= 0.9144;
                break;
            case 'ft':
                inputValue /= 0.3048;
                break;
            case 'in':
                inputValue /= 0.0254;
                break;
        }

        output.value = inputValue;
    }
}