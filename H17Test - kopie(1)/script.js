var getBtnHomeGrey = document.querySelector('.home-grey');
console.log(getBtnHomeGrey);

/*functie: klik op button home-grey en body wordt grijs*/
getBtnHomeGrey = addEventListener('click' , function(){
  
 /*close the menu*/
 var setContainerUlNone = document.querySelector('.mytoggle-Div');
 setContainerUlNone.classList.toggle('mytoggle');
 console.log("close the menu: colour")

 /* give the body the color grey*/
   var getBody = document.querySelector('body');
   console.log(" hallo body");
   console.log(getBody.classList);
   getBody.classList.add('kleurGrijs');

  
});

//getContainerUl.classList.replace ('container-ul-none','.container-ul-blok');

//style.backgroundColor = 'yellow'; works ? no
//style['background-color'] = 'yellow';




//var btnHamburger = document.querySelector('.btn-toggle-nav');
//btnHamburger = addEventListener('click', function (){
//    console.log("hamburger_1" + btnHamburger);/*works ? y*/

//element.classList.toggle("mystyle");