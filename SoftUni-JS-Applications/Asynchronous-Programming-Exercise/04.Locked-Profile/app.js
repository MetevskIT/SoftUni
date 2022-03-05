function lockedProfile() {

    let main = document.getElementById('main');

    async function getInfo() {

        let url = `http://localhost:3030/jsonstore/advanced/profiles`;
        
        try {

            let response = await fetch(url);

            let result = await response.json();
            main.replaceChildren();
            for (const person in result) {

                createProfile(result[person].username, result[person].email, result[person].age);

            }

        } catch (error) {
            alert('Error');
        }
    }

    function createProfile(username, email, age) {

        let divEl = document.createElement('div');
        divEl.className = 'profile';

        let imgEl = document.createElement('img');
        imgEl.className = 'userIcon'
        imgEl.src = "./iconProfile2.png";

        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';

        let inputTypeRadio = document.createElement('input')
        inputTypeRadio.type = "radio"
        inputTypeRadio.name = `${username}Locked`;
        inputTypeRadio.value = 'lock';
        inputTypeRadio.checked = true;

        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';

        let inputUnlockTypeRadio = document.createElement('input')
        inputUnlockTypeRadio.type = "radio"
        inputUnlockTypeRadio.name = `${username}Locked`;
        inputUnlockTypeRadio.value = 'unlock';

        let hr = document.createElement('hr');

        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';

        let inputTypeText = document.createElement('input')
        inputTypeText.type = 'text'
        inputTypeText.name = `${username}Username`;
        inputTypeText.value = username;
        inputTypeText.disabled = true;


        let divHiddenInfo = document.createElement('div');
        divHiddenInfo.className = 'hiddenInfo';

        let hr2 = document.createElement('hr');

        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';

        let inputTypeEmail = document.createElement('input')
        inputTypeEmail.type = 'email'
        inputTypeEmail.name = `${username}Email`;
        inputTypeEmail.value = email;
        inputTypeEmail.disabled = true;

        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Email:';

        let inputTypeAge = document.createElement('input')
        inputTypeAge.type = 'email'
        inputTypeAge.name = `${username}Age`;
        inputTypeAge.value = age;
        inputTypeAge.disabled = true;

        divHiddenInfo.appendChild(hr2)
        divHiddenInfo.appendChild(emailLabel)
        divHiddenInfo.appendChild(inputTypeEmail)
        divHiddenInfo.appendChild(ageLabel)
        divHiddenInfo.appendChild(inputTypeAge)

        let button = document.createElement('button');
        button.textContent = 'Show more';
        button.addEventListener('click', () => {

            if (inputUnlockTypeRadio.checked == true) {

                if (button.textContent == 'Show more') {

                    divHiddenInfo.querySelector('label').style.display = 'block';
                    divHiddenInfo.querySelector('input').style.display = 'block';
                    button.textContent = 'Hide it';
                    
                } else {

                    divHiddenInfo.querySelector('label').style.display = 'none';
                    divHiddenInfo.querySelector('input').style.display = 'none';
                    button.textContent = 'Show more';

                }
            }

        })

        divEl.appendChild(imgEl)
        divEl.appendChild(lockLabel)
        divEl.appendChild(inputTypeRadio)
        divEl.appendChild(unlockLabel)
        divEl.appendChild(inputUnlockTypeRadio)
        divEl.appendChild(hr)
        divEl.appendChild(usernameLabel)
        divEl.appendChild(inputTypeText)
        divEl.appendChild(divHiddenInfo)
        divEl.appendChild(button)

        main.appendChild(divEl);

    }

    return getInfo();
}