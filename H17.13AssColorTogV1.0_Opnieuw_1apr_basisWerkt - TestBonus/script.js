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




/*declaratie van variabelen*/

let getBtnHomeGrey = document.querySelector('.home-grey');
let getBtnRed = document.querySelector('.red');
let getBtnOrange = document.querySelector('.orange');
let getBtnPurple = document.querySelector('.purple');
let getBtnGreen = document.querySelector('.green');

/*functie: klik op button home-grey en body wordt grijs works ? y good job*/
if (getBtnHomeGrey.addEventListener('click', function() {
        console.log("getBtnHomeGrey : ", getBtnHomeGrey);
        var getBody = document.querySelector('.myLichaam');
        console.log(" hallo body :", getBody);
        getBody.classList.add('kleurGrijs');
        console.log("getBody.classList = ", getBody.classList);

        /*andere kleuren verwijderen works? y*/
        getBody.classList.remove('kleurRood');
        getBody.classList.remove('kleurOranje');
        getBody.classList.remove('kleurPaars');
        getBody.classList.remove('kleurGroen');


        /*menuKleur verdwijnt*/
        menuFunction();

    })); /*getBtnHomeGrey */

/*klik op de button red en body wordt rood works ? y good job*/
else if (

    getBtnRed.addEventListener('click', function() {
        let getBtnRed = document.querySelector('.red');
        console.log("getBtnRed : ", getBtnRed);
        var getBody = document.querySelector('.myLichaam');
        console.log(" hallo body :", getBody);

        /*body wordt kleurRood*/
        getBody.classList.add('kleurRood');
        console.log("getBody.classList = ", getBody.classList);

        /*andere kleuren verwijderen works? */
        getBody.classList.remove('kleurGrijs');
        getBody.classList.remove('kleurOranje');
        getBody.classList.remove('kleurPaars');
        getBody.classList.remove('kleurGroen');

        /*menuKleur verdwijnt*/
        menuFunction();

    })); /*getBtnRed */

/*klik op de button orange en body wordt oranje works ? y good job*/
else if (

    getBtnOrange.addEventListener('click', function() {
        let getBtnOrange = document.querySelector('.orange');
        console.log("getBtnOrange : ", getBtnOrange);
        var getBody = document.querySelector('.myLichaam');
        console.log(" hallo body :", getBody);

        /*body wordt kleurOranje*/
        getBody.classList.add('kleurOranje');
        console.log("getBody.classList = ", getBody.classList);

        /*andere kleuren verwijderen works? */
        getBody.classList.remove('kleurGrijs');
        getBody.classList.remove('kleurRood');
        getBody.classList.remove('kleurPaars');
        getBody.classList.remove('kleurGroen');


        /*menuKleur verdwijnt*/
        menuFunction();

    })); /*getBtnRed */

/*klik op de button purple en body wordt purple works ? y good job*/
else if (

    getBtnPurple.addEventListener('click', function() {
        let getBtnPurple = document.querySelector('.purple');
        console.log("getBtnPurple : ", getBtnPurple);
        var getBody = document.querySelector('.myLichaam');
        console.log(" hallo body :", getBody);

        /*body wordt kleurOranje*/
        getBody.classList.add('kleurPaars');
        console.log("getBody.classList = ", getBody.classList);

        /*andere kleuren verwijderen works? */
        getBody.classList.remove('kleurGrijs');
        getBody.classList.remove('kleurRood');
        getBody.classList.remove('kleurOranje');
        getBody.classList.remove('kleurGroen');


        /*menuKleur verdwijnt*/
        menuFunction();

    })); /*getBtnRed */

else if (

    getBtnGreen.addEventListener('click', function() {
        let getBtnGreen = document.querySelector('.purple');
        console.log("getBtnGreen : ", getBtnGreen);
        var getBody = document.querySelector('.myLichaam');
        console.log(" hallo body :", getBody);

        /*body wordt kleurOranje*/
        getBody.classList.add('kleurGroen');
        console.log("getBody.classList = ", getBody.classList);

        /*andere kleuren verwijderen works? */
        getBody.classList.remove('kleurGrijs');
        getBody.classList.remove('kleurRood');
        getBody.classList.remove('kleurOranje');
        getBody.classList.remove('kleurPaars');


        /*menuKleur verdwijnt*/
        menuFunction();

    })); /*getBtnRed */