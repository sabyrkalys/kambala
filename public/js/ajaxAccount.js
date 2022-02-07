const $myAccount = document.querySelector('.myAccaunt');
if($myAccount){
 const formInput = $myAccount.querySelectorAll('.myAccaunt-form__input');
 if($myAccount.querySelector('.myAccaunt-form__btn-save')){
  checkInput()
  //$myAccount.querySelector('.myAccaunt-form__btn-save').addEventListener('click', saveProfile);
 }

function validatePhone(phone){
 let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
 return regex.test(phone);
}


function saveProfile(e) {
 e.preventDefault();
const targetForm = (e.target.parentNode).parentNode;
let account = {
 profileStatus:1,
 login:targetForm.querySelector('#login').value,
 email:targetForm.querySelector('#email').value,
 profile:{
  name: targetForm.querySelector('#name').value,
  lastName: targetForm.querySelector('#lastName').value,
  patronymic: targetForm.querySelector('#patronymic').value,
  DOB: targetForm.querySelector('#dob').value,
  NameOrganization: targetForm.querySelector('#NameOrganization').value,
  sybDivision: targetForm.querySelector('#sybDivision').value,
  position: targetForm.querySelector('#position').value,
  phone: targetForm.querySelector('#phone').value
 }
}
fetch('./account/saveAccountData', {
 method: 'post',
 headers: {
  'Content-Type': 'application/json'
 },
 body: JSON.stringify(account)
})
.then(res => res.json()).then(data => {
 window.location.href = `http://localhost:3000/user/${data.result._id}/document`;
})
 
}


function checkInput(){
 //const d = [...formInput].filter(item => item.value !== '');
 //d.forEach(item => item.disabled = true)
 const i = [...formInput].filter(item => item.value === '');
 if(i.length){
  $myAccount.querySelector('.myAccaunt-form__btn-save').disabled = true;
  i.forEach(item => item.style.borderColor = 'red');
  i.forEach(item => item.addEventListener('change', function(e){
   e.target.style.borderColor = 'var(--bgBlue)';
   if(e.target.id === 'phone'){
    if (!validatePhone(+e.target.value)){
     alert('Введите номер телефона, в соответствии с примером')
     e.target.value = ''
     e.target.style.borderColor = 'red';
    }
   }
   checkValue()
  }))
 }
}


function checkValue(){
 const i = [...formInput].filter(item => item.value === '');
 if(i.length < 1){
   $myAccount.querySelector('.myAccaunt-form__btn-save').disabled = false;
 }
}


if($myAccount.querySelector('.myAccaunt-form__btn-edit')){
 //$myAccount.querySelector('.myAccaunt-form__btn-edit').addEventListener('click', editProfile);
}

function editProfile(e) {
 e.preventDefault();

if(check()){
 formInput.forEach(item => item.style.borderColor = 'var(--bgBlue)')
 const targetForm = (e.target.parentNode).parentNode;
 let account = {
  profileStatus:1,
  login:targetForm.querySelector('#login').value,
  email:targetForm.querySelector('#email').value,
  profile:{
   name: targetForm.querySelector('#name').value,
   lastName: targetForm.querySelector('#lastName').value,
   patronymic: targetForm.querySelector('#patronymic').value,
   DOB: targetForm.querySelector('#dob').value,
   NameOrganization: targetForm.querySelector('#NameOrganization').value,
   sybDivision: targetForm.querySelector('#sybDivision').value,
   position: targetForm.querySelector('#position').value,
   phone: targetForm.querySelector('#phone').value,
  }
 }
 fetch('./account/updateAccountData', {
  method: 'put',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(account)
 }).then(res => res.json()).then(data => {
  console.log('получилось');
 })
}
}

function check(){
 let valid = true;
 formInput.forEach(item => {
  if (item.id === 'lastName' && item.value === '') {
   alert('Пожалуйста, введите Ваше Фамилию');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'name' && item.value === '') {
   alert('Пожалуйста, введите Ваше Имя');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'patronymic' && item.value === '') {
   alert('Пожалуйста, введите Ваше Отчество');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'DOB' && item.value === '') {
   
   alert('Пожалуйста, введите Ваше дату рождения');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'NameOrganization' && item.value === '') {
   
   alert('Пожалуйста, введите Ваше название организации');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'sybDivision' && item.value === '') {
   
   alert('Пожалуйста, введите Ваше название организации');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'position' && item.value === '') {
   
   alert('Пожалуйста, введите Ваше название организации');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'phone' && item.value === '') {
   
   alert('Пожалуйста, введите Ваше название организации');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'login' && item.value === '') {
   
   alert('Пожалуйста, введите Ваше название организации');
   item.style.borderColor = 'red';
   return valid = false
  } else
 
  if (item.id === 'email' && item.value === '') {
   
   alert('Пожалуйста, введите Ваше название организации');
   item.style.borderColor = 'red';
   return valid = false
  } 

   return valid
  
 
 })
return valid;
}

}


