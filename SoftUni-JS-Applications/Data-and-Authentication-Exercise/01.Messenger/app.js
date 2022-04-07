function attachEvents() {

    let url = `http://localhost:3030/jsonstore/messenger`;

    let messagesArea = document.getElementById("messages");
    let author = document.querySelector('input[name="author"]')
    let content = document.querySelector('input[name="content"]')

    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', () => {
       
        let currMessage = {
            author:author.value,
            content:content.value,
        }
           fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(currMessage)
            
        })

    })

    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', async () => {

        let result = await fetch(url);
        let response = await result.json();

        let messages = Object.entries(response);

        messagesArea.textContent = ''

        messages.forEach(mess => {
            messagesArea.textContent += `${mess[1].author}: ${mess[1].content}\n`
        })

        messagesArea.textContent.trimEnd();

    })



}

attachEvents();