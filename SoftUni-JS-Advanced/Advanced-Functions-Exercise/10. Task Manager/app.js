function solve() {
    let sections = document.getElementsByClassName('wrapper');

    let addTaskSection = sections[0].children[0];
    let openSection = sections[0].children[1];
    let inProgressSection = sections[0].children[2];
    let completeSection = sections[0].children[3];

    let form = addTaskSection.querySelector('form');

    let taskInput = form.querySelector('#task');
    let descriptionInput = form.querySelector('#description');
    let dateInput = form.querySelector('#date');

    let button = form.querySelector('#add');
    button.addEventListener('click', add)

    function add(e) {
        if (taskInput.value && descriptionInput.value && dateInput.value) {
            e.preventDefault();
            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = taskInput.value;

            let pDescription = document.createElement('p');
            pDescription.textContent = `Description: ${descriptionInput.value}`;

            let pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${dateInput.value}`;

            let div = document.createElement('div');
            div.className = 'flex';

            let startButton = document.createElement('button')
            startButton.className = 'green';
            startButton.textContent = 'Start';
            startButton.addEventListener('click', start);

            let deleteButton = document.createElement('button')
            deleteButton.className = 'red';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', remove);

            div.appendChild(startButton);
            div.appendChild(deleteButton);

            article.appendChild(h3);
            article.appendChild(pDescription);
            article.appendChild(pDate);
            article.appendChild(div);

            openSection.children[1].appendChild(article)
        }
    }
    function start(e) {
        let current = e.currentTarget.parentNode.parentNode;
        let startButton = current.querySelector('.green');
        current.children[3].removeChild(startButton);

        let finishButton = document.createElement('button');
        finishButton.className = 'orange';
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', finish);
        current.children[3].appendChild(finishButton);

        inProgressSection.children[1].appendChild(current)

    }
   
    function remove(e) {
        let current = e.currentTarget.parentNode.parentNode;
        let currSection = e.currentTarget.parentNode.parentNode.parentNode;
        currSection.removeChild(current);
    }

    function finish(e){
        let current = e.currentTarget.parentNode.parentNode;
        let flex = current.querySelector('.flex');
        current.removeChild(flex);

        completeSection.children[1].appendChild(current)

    }

}