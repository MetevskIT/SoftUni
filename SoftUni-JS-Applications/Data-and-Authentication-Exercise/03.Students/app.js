window.addEventListener('load', students)

 function students() {
    let url = `http://localhost:3030/jsonstore/collections/students`;

    let tbody = document.querySelector('tbody');
    tbody.replaceChildren();


    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let firstName = document.querySelector('input[name="firstName"]')
        let lastName = document.querySelector('input[name="lastName"]')
        let number = document.querySelector('input[name="facultyNumber"]')
        let grade = document.querySelector('input[name="grade"]')

        firstName = firstName.value;
        lastName = lastName.value;
        facultyNumber = number.value;
        grade = grade.value;

        if (!firstName || !lastName || !facultyNumber || !grade) {
            return;
        }

        let newStudent = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        }
        let postRequest = fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        })
        createStudent();
    })

    async function createStudent() {
        
        let response = await fetch(url);
        let result = await response.json();

        let allStudents = Object.entries(result);
        tbody.replaceChildren();
        allStudents.forEach(s => {

            let trEl = document.createElement('tr');

            let tdFirstName = document.createElement('td');
            tdFirstName.textContent = s[1].firstName

            let tdLastName = document.createElement('td');
            tdLastName.textContent = s[1].lastName

            let tdNumber = document.createElement('td');
            tdNumber.textContent = s[1].facultyNumber

            let tdGrade = document.createElement('td');
            tdGrade.textContent = s[1].grade

            trEl.appendChild(tdFirstName);
            trEl.appendChild(tdLastName);
            trEl.appendChild(tdNumber);
            trEl.appendChild(tdGrade);

            tbody.appendChild(trEl);

        })
    }
    createStudent();
}