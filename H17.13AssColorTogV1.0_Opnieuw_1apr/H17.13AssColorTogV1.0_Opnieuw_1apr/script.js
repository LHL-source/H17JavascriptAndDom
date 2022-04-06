/* alleen hamburger zichtbaar op scherm menu-kleur niet via css display=none workd ? y*/
/*stap 1 maak een function toggle*/

function menuFunction() {
    var getMenuKleur = document.querySelector('.menuKleur');
    console.log("menuFunction = ", getMenuKleur.className);
    getMenuKleur.classList.toggle('visible');
    /*console.log(getMenuKleur.target);*/

}

/*stap 2 maak van menuKleur visible of invisible*/
let btnToggleNav = document.querySelector('.hamburger_icon')
    /*console.log('hamburgerMenu: ', hamburger_icon.className);*/
btnToggleNav.addEventListener('click', function() {
    console.log("hamburger_icon: " + btnToggleNav);
    menuFunction();
    console.log('hamburgerMenu/eventListener klik gelukt');

}) /*addEventListener*/




/*functie: klik op button home-grey en body wordt grijs works ? not yet*/

let getBtnHomeGrey = document.querySelector('.home-grey');

if (getBtnHomeGrey = addEventListener('click', function() {
        console.log("getBtnHomeGrey : ", getBtnHomeGrey);
        var getBody = document.querySelector('.myLichaam');
        console.log(" hallo body :", getBody);
        getBody.classList.add('kleurGrijs');
        console.log("getBody.classList = ", getBody.classList);

        /*menuKleur verdwijnt*/
        menuFunction();

    })); /*getBtnHomeGrey */

/*klik op de button red en body wordt rood works ?*/
/*var getBtnRed = document.querySelector('.red');
console.log("getBtnRed : ", getBtnRed);

getBtnRed = addEventListener('click', function() {

    var getBody = document.querySelector('.myLichaam');
    console.log(" hallo body :", getBody);*/

/*verwijder kleurGrijs*/
/*getBody.classList.remove('kleurGrijs');
console.log("getBody.classList = ", getBody.classList);*/

/*voegtoe kleurRood*/
/*getBody.classList.add('kleurRood');
console.log("getBody.classList = ", getBody.classList);*/



/*});*/
/*getBtnRed */