const form = document.querySelector('form');
const first_name = document.querySelector('#f-name');
const surname = document.querySelector('#s-name');
const email = document.querySelector('#email');
const password = document.querySelector('#paswrd');
const confirm_paswrd = document.querySelector('#con-paswrd');
const genders = document.querySelectorAll('#check-boxes label input');
const country = document.querySelector('select');
const submitBtn = document.querySelector('.submit-btn');
const firstNameP = document.querySelector('#f-name-msg');
const surnameP = document.querySelector('#s-name-msg');
const emailP = document.querySelector('#e-name-msg')
const passwordP = document.querySelector('#p-name-msg')
const confirmPaswrdP = document.querySelector('#cp-name-msg')
const allFormInpt = document.querySelectorAll('.inpt');
// console.log(allFormInpt);

function valFirstName(fName){
    if(fName === ''){
        first_name.style.border = '2px solid red';
        firstNameP.style.display = 'block';
        firstNameP.textContent = 'first name is required';
        submitBtn.type = 'button';
    }
    else{
        first_name.style.border = '2px solid rgba(21, 234, 46, 0.522)';
        firstNameP.style.display = 'none';
        localStorage.setItem('firstName',`${fName}`)
        submitBtn.type = 'submit';
    }
}   

function valSurname(sName){
    if(sName === ''){
        surname.style.border = '2px solid red';
        surnameP.style.display = 'block';
        surnameP.textContent = 'surname is required';
        submitBtn.type = 'button';
    }
    else{
        surname.style.border = '2px solid rgba(21, 234, 46, 0.522)';
        surnameP.style.display = 'none';
        localStorage.setItem('surname',`${sName}`)
        submitBtn.type = 'submit';
    }
}

function valEmail(eMail){

    let gmail_sample = '@gmail.com'; 
    let yahoo_sample = '@yahoo.com';
    let start = length - 10;

    if(eMail.slice(start) !== gmail_sample && eMail.slice(start) !== yahoo_sample){
        email.style.border = '2px solid red';
        emailP.style.display = 'block';
        emailP.textContent = 'fill in a valid Email'
        submitBtn.type = 'button';
    }
    else{
        email.style.border = '2px solid rgba(21, 234, 46, 0.522)';
        emailP.style.display = 'none';
        localStorage.setItem('email',`${eMail}`);
        submitBtn.type = 'submit';
    }
}

function valPassword(pasword){
    if(pasword === ''){
        password.style.border = '2px solid red';
        passwordP.style.display = 'block';
        passwordP.textContent = 'Please fill out your a password';
        submitBtn.type = 'button';
    }
    else if(pasword.length < 4 || pasword.length > 9){
        password.style.border = '2px solid red';
        passwordP.style.display = 'block';
        passwordP.textContent = 'Password must be greater 3 and less than 10 characters';
        submitBtn.type = 'button';
    }
    else{
        password.style.border = '2px solid rgba(21, 234, 46, 0.522)';
        passwordP.style.display = 'none';
        localStorage.setItem('password',`${pasword}`)
        submitBtn.type = 'submit';
    }
}

function comfirmPasword(pas,conpass){
    if(conpass === ''){
        confirm_paswrd.style.border = '2px solid red';
        confirmPaswrdP.style.display = 'block';
        confirmPaswrdP.textContent = 'Please fill out your a password';
        submitBtn.type = 'button';
    }
    else if(pas.trim() !== conpass.trim()){
        confirm_paswrd.style.border = '2px solid red';
        confirmPaswrdP.style.display = 'block';
        confirmPaswrdP.textContent = 'Incorrect Password';
        submitBtn.type = 'button';
    }
    else{
        confirm_paswrd.style.border = '2px solid rgba(21, 234, 46, 0.522)';
        confirmPaswrdP.style.display = 'none';
        submitBtn.type = 'submit';
    }
}
function valGender(mal,femal){ 
    if(mal === false && femal === false){
        for(let i = 0; i < genders.length; i++){
            genders[i].parentElement.parentElement.style.border = '2px solid red' 
        }
        submitBtn.type = 'button';
    }
    else{
        for(let i = 0; i < genders.length; i++){
            genders[i].parentElement.parentElement.style.border = 'none' 
        }
        submitBtn.type = 'submit';
    }
}

function valCountry(contry){
    if(contry === 'Country'){
        country.style.border = '2px solid red';
        country.style.color = 'red';
        submitBtn.type = 'button';
    }
    else{
        country.style.border = '2px solid rgba(21, 234, 46, 0.522)';
        country.style.color = 'black';
        localStorage.setItem('country', `${contry}`);
        submitBtn.type = 'submit';
    }
}

function storeGender(){
    if(genders[0].checked === true && genders[1].checked === false){
        localStorage.setItem('gender', `${genders[0].parentElement.textContent}`)
    }
    else if(genders[1].checked === true && genders[0].checked === false){
        localStorage.setItem('gender', `${genders[1].parentElement.textContent}`)
    }
}

function finalValidate(){
    for(let i = 0; i < allFormInpt.length; i++){
        if(allFormInpt[i].style.border === '2px solid red'){
            submitBtn.type = 'button';
        }
    }
    
}


submitBtn.addEventListener('click',(e)=>{
    localStorage.setItem('userName',`${first_name.value} ${surname.value}`)
    valFirstName(first_name.value);
    valSurname(surname.value);
    valEmail(email.value);
    valPassword(password.value)
    comfirmPasword(password.value,confirm_paswrd.value);
    valGender(genders[0].checked,genders[1].checked);
    valCountry(country.value);
    storeGender();
    finalValidate();
})

