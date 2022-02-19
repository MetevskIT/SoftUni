function solve() {

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname')
    let email = document.getElementById('email');
    let birth = document.getElementById('birth')
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    let sum = document.getElementById('sum');

    let addWorkerBtn = document.getElementById('add-worker')
    addWorkerBtn.addEventListener('click', add)

    let tdBodyContent = document.getElementById('tbody');

    function add(e) {
        e.preventDefault();
        if (!fname.value || !lname.value || !email.value || !birth.value || !position.value || !salary.value) {
            return;
        }

        let trElement = document.createElement('tr');

        let tdName = document.createElement('td');
        tdName.textContent = fname.value;

        let tdLname = document.createElement('td');
        tdLname.textContent = lname.value;

        let tdEmail = document.createElement('td');
        tdEmail.textContent = email.value;

        let tdBirth = document.createElement('td');
        tdBirth.textContent = birth.value;

        let tdPosition = document.createElement('td');
        tdPosition.textContent = position.value;

        let tdSalary = document.createElement('td');
        tdSalary.textContent = salary.value;

        let firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';

        let editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';

        sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(2);

        trElement.appendChild(tdName);
        trElement.appendChild(tdLname);
        trElement.appendChild(tdEmail);
        trElement.appendChild(tdBirth);
        trElement.appendChild(tdPosition);
        trElement.appendChild(tdSalary);
        trElement.appendChild(firedBtn);
        trElement.appendChild(editBtn);

        tdBodyContent.appendChild(trElement);

        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        editBtn.addEventListener('click', () => {
            fname.value = tdName.textContent;
            lname.value = tdLname.textContent;
            email.value = tdEmail.textContent;
            birth.value = tdBirth.textContent;
            position.value = tdPosition.textContent;
            salary.value = tdSalary.textContent;
            trElement.remove();
            sum.textContent = (Number(sum.textContent) - Number(tdSalary.textContent)).toFixed(2);
        })
        firedBtn.addEventListener('click',()=>{
            trElement.remove();
            sum.textContent = (Number(sum.textContent) - Number(tdSalary.textContent)).toFixed(2);
        })

    }
}
solve()