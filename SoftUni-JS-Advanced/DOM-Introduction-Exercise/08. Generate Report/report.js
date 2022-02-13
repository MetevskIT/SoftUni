function generateReport() {
    let objects = [];
    let headerTableElements = document.querySelectorAll('input[type="checkbox"]');
    let bodyTableElements = document.querySelectorAll('tbody tr');
    let resultArea = document.getElementById('output');
    for (let i = 0; i < bodyTableElements.length; i++) {
        let currObj = {};
        for (let j = 0; j < headerTableElements.length; j++) {
            if (headerTableElements[j].checked) {
                currObj[headerTableElements[j].name] = bodyTableElements[i].querySelectorAll('td')[j].textContent;
            }
        }
        objects.push(currObj);
    }
    resultArea.textContent = JSON.stringify(objects);
}