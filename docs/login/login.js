let username = document.querySelector('#user-name');
let password = document.querySelector('#password');
let showHide = document.querySelector('#shw-hide');
let usernameP = document.querySelector('#username');
let passwordP = document.querySelector('#paswrd');
let submitBtn = document.querySelector('.submit-btn');
let allLabel = document.querySelectorAll('label');

showHide.addEventListener('click', e =>{
    if(password.type === 'password'){
        password.type = 'text';
        e.target.textContent = 'Hide'
    }
    else{
        password.type = 'password';
        e.target.textContent = 'Show'
    }
})

function validateUsername(user_name){
    if(user_name !== `${localStorage.firstName} ${localStorage.surname}`){
        username.parentElement.style.border = '3px solid red';
        usernameP.style.display = 'block';
        usernameP.textContent = 'Invaild Username, Username must be your sign-up first-name and surname';
        submitBtn.type = 'button';
    }
    else{
        username.parentElement.style.border = '3px solid rgba(15, 193, 36, 0.522)';
        usernameP.style.display = 'none';
        usernameP.textContent = '';
        submitBtn.type = 'submit';
    }
}
function validatePassword(paswrd){
    if(paswrd !== localStorage.password){
        password.parentElement.style.border = '3px solid red';
        passwordP.style.display = 'block';
        passwordP.textContent = 'Password Incorrect';
        submitBtn.type = 'button';
    }
    else{
        password.parentElement.style.border = '3px solid rgba(15, 193, 36, 0.522)';
        passwordP.style.display = 'none';
        passwordP.textContent = '';
        submitBtn.type = 'submit';
    }
}
function validateAll(){
    for(let i = 0; i < allLabel.length; i++){
        if(allLabel[i].style.border === '3px solid red'){
            submitBtn.type = 'button';
        }
    }
}

submitBtn.addEventListener('click',()=> {
    validateUsername(username.value);
    validatePassword(password.value);
    validateAll();
})