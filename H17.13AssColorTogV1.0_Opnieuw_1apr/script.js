/* alleen hamburger zichtbaar op scherm menu-kleur niet via css display=none workd ? y*/
 /*stap 1 maak een function toggle*/
 
function menuFunction(){
    let menuKleur =document.querySelector('.menuKleur');
    console.log("menuFunction = ",menuKleur);
    menuKleur.classList.toggle('visible');

}

 /*stap 2 maak van menuKleur visible of invisible*/
let btnToggleNav = document.querySelector('.btn-toggle-nav')

btnToggleNav.addEventListener('click', function() {
    menuFunction();
    console.log('hamburgerMenu/eventListener klik gelukt');
   
    })/*addEventListener*/




/*functie: klik op button home-grey en body wordt grijs works ? y*/

var getBtnHomeGrey = document.querySelector('.home-grey');
console.log("getBtnHomeGrey : " ,getBtnHomeGrey);

getBtnHomeGrey = addEventListener('click' , function(){
  
        var getBody = document.querySelector('.myLichaam');
        console.log(" hallo body :" ,getBody);
        getBody.classList.add('kleurGrijs');
        console.log("getBody.classList = " ,getBody.classList);

   /*close the menu*/
    menuFunction();
    
   
    })/*addEventListener

}); /*getBtnHomeGrey */ 


/*button Red*/
//var getBtnRed = document.querySelector('.red');
//console.log("getBtnRed : " + getBtnRed);

/* stap 2functie: klik op button:red en body wordt rood works ?*/
     
     
    /* getBtnRed = addEventListener('click' , function(){
       
             var getBody = document.querySelector('body');
             console.log(" hallo body :" + getBody);
             getBody.classList.add('kleurRood');
             console.log("getBody = "+ getBody.classList);
     
        /*close the menu*/
        /* menuFunction();*/
         
        
        /* })/*addEventListener*/
     
    /* });  */ /*getBtnHomeGrey*/   
     


/* hieronder kladblok*/
    



 
