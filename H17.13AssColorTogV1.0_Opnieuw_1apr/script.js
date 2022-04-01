/* alleen hamburger zichtbaar op scherm menu-kleur niet via css display=none workd ? y*/
 /*stap 1 maak een function toggle*/
 
function menuFunction(){
    let menuKleur =document.querySelector('.menuKleur');
    console.log("menuFunction = " +  menuKleur);
    menuKleur,classList.toggle('menuToggle');

}

 /*function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
 }*/

document.addEventListener('click', function(menuFunction) {
    console.log('hamburgerMenu/eventListener klik gelukt');
    let menuKleurOpen=document.querySelector('.menuKleur');
    console.log('hamburger/function/menuKleuropen' + menuKleurOpen);


})/*addEventListener*/

   
         
        
/* hieronder kladblok*/
    



 /*na klik menu-kleur komt te voorschijn works ? y*/
   // let getMenuKleur = document.querySelector('.menuKleur');
   // console.log('ophalen getMenuKleur= ' + getMenuKleur );

   // let getMenuKleurUlDisplay = document.querySelector('.menuKleur.ul.display');
  //  console.log('ophalen getMenuKleurUlDisplay= ' + getMenuKleurUlDisplay );


   // let getMenuOpen = document.querySelector('.menuOpen');
  //  console.log('ophalen getMenuOpen= ' + getMenuOpen );

  //  let getmenuClose =  document.querySelector('.menuClose');
  //  console.log('ophalengetmenuClose= ' + getmenuClose );
    
   /*indien menukleur is display=none dan zet display=block, else if display=block*/ 
  // if ( getMenuKleur = 'display: none'){
   //     console.log("getMenukleur: " + getMenuKleur );
  //      getMenuKleur.classList.replace('getmenuClose', 'getMenuOpen');
  //      console.log("if getMenukleur = none dan doet display = block" + getMenuKleur.classList);
 //   }

  //  else if (getMenuKleur = 'display: block'){
  //       getMenuKleur.classList.replace(getmenuOpen, getMenuClose);
  //       console.log("if getMenukleur = none dan doet display = block" + getMenuKleur.classList);
 //   };
    
         
