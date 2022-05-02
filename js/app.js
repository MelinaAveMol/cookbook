
//Contact form

//let form = document.getElementById("contact-form");
//let inputName = document.getElementById("name");
//let inputAge = document.getElementById("surname");
//let mobileButton = document.getElementById("mobile");
//let emailButton = document.getElementById("email");
//let helloButton= document.getElementById("hola");
//let sendButton = document.getElementById("form-send-button");


//function hello(name) {
//    alert ("Hola" + name + surname);
//}

//helloButton.addEventListener("click",() => {
    
//    hello("Erik")

//});



import {plusMinusButton} from './plus-minus-button.js';

plusMinusButton();
let quantityPlus = document.getElementById("quantity-plus"); 
let quantityMinus = document.getElementById("quantity-minus"); 
let quantityShow = document.getElementById("quantity-show");


quantityPlus.addEventListener("click", () => {
        

        if(quantityShow.value < 3){
           quantityShow.value = (parseInt(quantityShow.value) + 1);
            
}else if (quantityShow.value >= 3){
            
            alert("No puedes elegir más de tres talleres simultáneamente");
        }
});

quantityMinus.addEventListener("click", () => {
        

if(quantityShow.value >1 ){
    quantityShow.value = (parseInt(quantityShow.value) - 1);
            
       }
});


import {tabs} from './tabs.js';

tabs();
const tab         = document.querySelectorAll('.tab')
const tabRelated  = document.querySelectorAll('.tab-related')

//click en tab-panel
// todo tab quitar la clase activo
//todo tab-related quitar la clase activo
//.tab-panel
//.tab-panel-related

//recorriendo tabs
tab.forEach( (activeTab, i ) => {
    //click a cada uno
   tab[i].addEventListener('click', () => {
           //recorrer todos los .tab
       tab.forEach( (activeTab, i) => {
           //quitando la clase active de cada tab
           tab[i].classList.remove('tab-active');
            //quitando la clase active de cada tab-related

           tab[i].classList.remove('tab-related-active');
//en los tab-related con la misma posisción, añado la clase active
       })
       tab[i].classList.add('tab-active');
           tab-related[i].classList.add('tab-related-active');
    })


});
// Aquí añadimos el código de nuestra función


import {hamburger} from './hamburger.js';

hamburger();
let hamburger = document.getElementById("hamburger");
let picks = document.getElementById("picks");

if(hamburger){
    hamburger.addEventListener("click", () => {
        picks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}





