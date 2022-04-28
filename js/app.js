// Hamburguesa

let hamburger = document.getElementById("hamburger");
let picks = document.getElementById("picks");

if(hamburger){
    hamburger.addEventListener("click", () => {
        picks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}


// Botón más-menos

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






