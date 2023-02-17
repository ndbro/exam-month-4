const form = document.querySelector('#login');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit',(evt)=>{
    evt.preventDefault();


    console.log(username.value,password.value);
})