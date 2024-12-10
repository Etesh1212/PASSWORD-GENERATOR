const lengthp=document.querySelector('#length-number');
const upper=document.querySelector('#uppercase');
const lower=document.querySelector('#lowercase');
const number=document.querySelector('#numbers');
const symbol=document.querySelector('#symbols');

const passinp=document.querySelector('#pass-input');
const copy=document.querySelector('#copy');
const generate=document.querySelector('#generate');

console.log(lengthp.value)
console.log(upper.checked)
console.log(lower.checked)
console.log(number.checked)
console.log(symbol.checked)



const uppercasestr='ABCDEFGHIJKLMNOPQRSTUVWXYX';
const lowercasestr='abcdefghijklmnopqrstuvwxyz';
const numberstr='0123456789';
const symbolstr='!@#$%^&*()_+';



generate.addEventListener('click',()=>{

    let str='';

    if(upper.checked){
        str += uppercasestr;

    }
    if(lower.checked){
        str+= lowercasestr;

    }
    if(number.checked){
        str += numberstr;

    }
    if(symbol.checked){
        str += symbolstr;


    }

    console.log(str,"str")
    let password='';
    for(let i=0; i<lengthp.value; i++)
    {
    let index=Math.floor(Math.random() * str .length)
    console.log(index,"index")
    console.log("Math.random()", Math.random())
    console.log("Math.random()* str.length" , Math.random() * str.length) 
    console.log("Math.floor(Math.random()* str.length)",Math.floor(Math.random() * str.length))   
    console.log(str[index])
    password += str[index];
    
    }
    console.log(password,"password")
    passinp.value=password;


});


copy.addEventListener('click',()=>{

if( passinp.value === ''){
    alert('Please Generate a password First');

}else{
    const newele =document.createElement('testarea');
    newele.value=passinp.value;
    document.body.appendChild(newele);
    newele.ariaSelected();
    
    document.execCommand('COPY');
    alert('Password Copied to Clipborad');
}


});


        