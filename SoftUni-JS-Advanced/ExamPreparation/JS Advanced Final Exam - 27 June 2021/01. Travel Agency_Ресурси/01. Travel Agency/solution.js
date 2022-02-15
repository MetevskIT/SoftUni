window.addEventListener('load', solution);

function solution() {

  //get form elements
  let fname = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let code = document.getElementById('code');

  let submitBTN = document.getElementById('submitBTN');
  submitBTN.addEventListener('click', submit);

  let infoPreview = document.getElementById('infoPreview');

  let editBTN = document.getElementById('editBTN');
  editBTN.addEventListener('click', edit);

  let continueBTN = document.getElementById('continueBTN');

  continueBTN.addEventListener('click', contin);

  let obj = {};
  //add functionality

  function submit(e) {
    e.preventDefault();
    if (!fname.value || !email.value) {
      return;
    }
    obj = {

      'Full Name': fname.value,
      'Email': email.value,
      'Phone Number': phone.value,
      'Address': address.value,
      'Postal Code': code.value,
    }

    for (const key in obj) {
      let lielement = document.createElement('li');
      lielement.textContent = `${key}: ${obj[key]}`
      infoPreview.appendChild(lielement);
    }

    submitBTN.disabled = true;
    continueBTN.disabled = false;
    editBTN.disabled = false;

    fname.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    code.value = '';
  }

  function edit(e) {
    let li = e.currentTarget.parentNode.parentNode.children[0].querySelectorAll('li');
    Array.from(li).forEach(x => x.remove());

    fname.value = obj['Full Name'];
    email.value = obj['Email'];
    phone.value = obj['Phone Number'];
    address.value = obj['Address'];
    code.value = obj['Postal Code'];

    submitBTN.disabled = false;
    editBTN.disabled = true;
    continueBTN.disabled = true;

  }

  function contin() {
    let block = document.getElementById('block');

    block.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = "Thank you for your reservation!"
    block.appendChild(h3);

  }


}
