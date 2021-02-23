const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');


const signinBtn = document.querySelector('.signin');
const signupBtn = document.querySelector('.signup')

const loginReg = document.querySelector('.reg');
const RegBack = document.querySelector('.back'); 

signinBtn.addEventListener('click',()=>{
});

loginReg.addEventListener('click',()=>{
   section1.style.display = 'none';
   section2.style.display = 'flex';
});

RegBack.addEventListener('click',()=>{
   section2.style.display = 'none';
   section1.style.display = 'flex';
   });