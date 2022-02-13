class Contact {
    constructor(firstName, lastnName, phone, email) {
        this.firstName = firstName;
        this.lastnName = lastnName;
        this.phone = phone;
        this.email = email;
        this.onlineStatus = false;
        this.element = document.createElement('article');
    }
    get online() {
        return this.onlineStatus;
    }
    set online(value) {
        this.onlineStatus = value;

        if (this.onlineStatus == false) {

            this.element.querySelector('.title').classList.remove('online')

        } else {

            this.element.querySelector('.title').classList.add('online');


        }
    }

    render(id) {
        let currElement =
            `<div class="title">${this.firstName + ' ' + this.lastnName}<button>&#8505;</button></div>
        <div class="info" style='display:none;'>
            <span>&phone; ${this.phone}</span>
            <span>&#9993; ${this.email}</span>
        </div>`

        this.element.innerHTML = currElement;
        this.element.querySelector('button').addEventListener('click', function info(e) {
            if (e.currentTarget.parentNode.parentNode.querySelector('.info').style.display == 'block') {
                e.currentTarget.parentNode.parentNode.querySelector('.info').style.display = 'none';

            } else {
                e.currentTarget.parentNode.parentNode.querySelector('.info').style.display = 'block';

            }
        });
        document.getElementById(id).appendChild(this.element);

      

    }

}
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  