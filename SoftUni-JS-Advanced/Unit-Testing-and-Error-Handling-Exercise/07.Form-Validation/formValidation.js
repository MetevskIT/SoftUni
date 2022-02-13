function validate() {
    
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submit);
    
    let checkButton = document.getElementById('company');
    checkButton.addEventListener('click', checkButtonFunc);
    
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let valid = document.getElementById('valid');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    let passwordsPattern = /^[\w]{5,15}$/;

    let isTrue = true;
   
    function checkButtonFunc(e) {
     
        if (e.currentTarget.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }

    }

    function submit(e) {
       
        if (username.value.match(usernamePattern)) {
            
            username.style.border = 'none'

        } else {
            
            username.style.borderColor = 'red'
            isTrue = false;
        }
        if (email.value.match(emailPattern)) {
           
            email.style.border = 'none'

        } else {
           
            email.style.borderColor = 'red'
            isTrue = false;
        }
        if (password.value.match(passwordsPattern)&&password.value===confirmPassword.value &&confirmPassword.value.match(passwordsPattern)) {
            
            password.style.border = 'none'
            confirmPassword.style.border = 'none'

        } else {
            
            password.style.borderColor = 'red'
            confirmPassword.style.borderColor = 'red'
            isTrue = false;
        }

        if (checkButton.checked) {
           
            if (Number(companyNumber.value)>=1000 && Number(companyNumber.value)<=9999) {
                companyNumber.style.border = 'none'
            } else {
                companyNumber.style.borderColor = 'red'
                isTrue = false;
            }
        }

        if (isTrue) {
            valid.style.display='block';
        }else{
            valid.style.display='none';
        }

    }

}
