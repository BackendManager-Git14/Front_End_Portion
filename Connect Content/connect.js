const input = document.querySelectorAll('.input-field');

input.forEach((inp) => {
    inp.addEventListener('focus',function(){
        inp.classList.add('active');
    })
    inp.addEventListener('blur',function(){
        if(inp.value != "") return;
        inp.classList.remove('active');
    })
})

/* logic of sliding form switch */

const toggleform = document.querySelectorAll('.toggle');
const mainsection = document.querySelector('main');

toggleform.forEach((btn) => {
    btn.addEventListener('click',function(){
        mainsection.classList.toggle('form-mode');
    })
})

/* logic of validations */

const registerbtn = document.getElementById('btn-register');

registerbtn.addEventListener('submit',function(){
    
})