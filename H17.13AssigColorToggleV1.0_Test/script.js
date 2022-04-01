/*open van pagina alleen zichtbaar hamburger-menu*/
document.addEventListener('click', function () {
    console.log('test-1');
    var closeMenuColor=document.querySelector('.myToggle');
    closeMenuColor.classList.toggle("mytoggle");/*close menu-color*/
});

/*druk op "Hamburger" button en menu:kleur komt te voorschijn*/
var btnHamburger = document.querySelector('.btn-toggle-nav');
console.log(btnHamburger);
btnHamburger.addEventListener('click', function (){
    console.log("eventlisener" + btnHamburger);/*works ? y*/

    /*works ? not yet*/

   

   var openMenuColor = document.querySelector('.myToggle');
   console.log(openMenuColor);
   openMenuColor.classList.toggle("mytoggle");/*open menu-color*/
   /* console.log (openMenuColor.classList);*/
});



/*druk op button Home grey, pagina wordt grijs (works ?)en menu-kleur verdwijnt(works?) */
var getBtnHomeGrey = document.querySelector('.home-grey');
console.log(getBtnHomeGrey);

/*function: klik op button home-grey en body wordt grijs*/
getBtnHomeGrey.addEventListener('click' , function(){
  
 /*close the menu*/
 var setContainerUlNone = document.querySelector('.myToggle');
 console.log("close the menu: colour" , setContainerUlNone)
 setContainerUlNone.classList.toggle("mytoggle");
 
``
 /* give the body the color grey*/
   var getBody = document.querySelector('body');
   console.log(" hallo body");
   console.log(getBody.classList);
  getBody.classList.add('kleurGrijs');

});



/*----------------------------------------------------*/
/* set the click event op button home-grey dd 30-3-2022*/
    /*var getBtnHomeGrey = document.querySelector('.home-grey');
    console.log(getBtnHomeGrey);*/

    /*getBtnHomeGrey = addEventListener('click' , function(){*/
    /*close the menu*/
   /* var setContainerUlNone = document.querySelector('.container-ul-none');
    setContainerUlNone.classList.replace('container-ul-block','.container-ul-none');
    console.log("close the menu: colour")*/
    
    /*give the body the color grey*/
    /*var getBody = document.querySelector('body');
    console.log(" hallo body");
    console.log(getBody.classList);
    getBody.classList.add('kleurGrijs');*/
 
    
/* });*/



/*----------------------------------------------------*/
//kladblok
/* set the click event op button home-grey dd 29-3-2022*/
/*var btnHomeGrey = document.querySelector('.home-grey');
btnHomeGrey.addEventListener('click', function (){
    console.log("home-grey" + btnHomeGrey) ;/*works ? y*/

   /*verander kleur van body naar grijs*/
   /* var setBody =document.querySelector('.body');/*works ? y*/
   /* console.log(setBody);/*works ? y*/
    /*setBody.classList.add ('home-grey');*/
   
    
/*});*/

