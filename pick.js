export let renderPicks = () =>{

    let picksRelated = document.querySelectorAll('.picked-related');

    picksRelated.forEach(pickedRelated => {

        pickedRelated.addEventListener("change", () =>{

           let pickedRelatedOptions = pickedRelated.closest('.form-training').querySelectorAll('.picked-related-options');
           
           pickedRelatedOptions.forEach (pickedRelatedOption => {

                if(pickedRelated.value == pickedRelatedOption.dataset.related){

                    pickedRelatedOption.classList.add('active');

                }else{
                    pickedRelatedOption.classList.remove('active');
                }

           });


        });
    });
}