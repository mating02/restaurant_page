/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/DOMloader.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
function loadDOM() {
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';

        const panoramaImg = document.createElement('img');
        panoramaImg.classList.add('panorama');
        panoramaImg.src = 'https://static.vecteezy.com/system/resources/previews/022/968/124/original/italian-village-cartoon-landscape-with-green-hills-and-fields-illustration-flat-design-poster-european-summer-village-european-countryside-in-fall-country-houses-vector.jpg';
        panoramaImg.alt = 'italian background';

        const headliner = document.createElement('div');
        headliner.classList.add('headline');

        const lang = document.createElement('div');
        lang.classList.add('lang');

        lang.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const selectLang = document.createElement('select');
        selectLang.setAttribute('name', 'language');
        selectLang.id = 'language';
        const option1 = document.createElement('option');
        option1.setAttribute('value', 'en');
        option1.textContent = 'EN';
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'it');
        option2.textContent = 'IT';
        selectLang.appendChild(option1);
        selectLang.appendChild(option2);

        lang.appendChild(selectLang);

        const headtitle = document.createElement('div');
        headtitle.classList.add('headtitle');
        headtitle.textContent = "The Bella Partia Restaurant";

        const menu = document.createElement('div');
        menu.classList.add('menu');

        const buttonMenu = document.createElement('button');
        buttonMenu.classList.add('buttonMenu');
        buttonMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal-content">
        <div class="option home">Home</div>
        <div class="option menu">Menu</div>
        <div class="option contact">Contact</div>
        </div>
        `;

        menu.appendChild(buttonMenu);
        menu.appendChild(modal);

        headliner.appendChild(lang);
        headliner.appendChild(headtitle);
        headliner.appendChild(menu);

        const container = document.createElement('div');
        container.classList.add('container');

        const about = document.createElement('div');
        about.classList.add('about');

        const titleAbout = document.createElement('div');
        titleAbout.classList.add('title', 'about');
        titleAbout.textContent = "About Bella Partia";

        const aboutImages = document.createElement('div');
        aboutImages.classList.add('aboutImages');
        const aboutImg1 = document.createElement('img');
        aboutImg1.classList.add('aboutImg');
        aboutImg1.src = "https://images.unsplash.com/photo-1534650075489-3baecec1e8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
        aboutImg1.alt = "italian restaurant";
        const aboutImg2 = document.createElement('img');
        aboutImg2.classList.add('aboutImg');
        aboutImg2.src = "https://images.squarespace-cdn.com/content/v1/54905286e4b050812345644c/729f506c-d59a-4494-97a7-902e96caf393/Snip20230330_2.png";
        aboutImg2.alt = "location";
        aboutImages.appendChild(aboutImg1);
        aboutImages.appendChild(aboutImg2);

        const text1 = document.createElement('div');
        text1.classList.add('text', 'aboutDiv');
        text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";

        about.appendChild(titleAbout);
        about.appendChild(aboutImages);
        about.appendChild(text1);

        const meetChef = document.createElement('div');
        meetChef.classList.add('meetChef');

        const meetChefTitle = document.createElement('div');
        meetChefTitle.classList.add('meetChef', 'title');
        meetChefTitle.textContent = "Meet the Chef";

        const francescoImg = document.createElement('img');
        francescoImg.classList.add('francescoImg');
        francescoImg.src = "https://img.freepik.com/fotos-kostenlos/ausdrucksstarker-junger-mann-posiert-fuer-winterferien_140725-141023.jpg?w=1380&t=st=1696262618~exp=1696263218~hmac=fc96706489b8a3fc4cc74a27e86e7f29bfb2c50b0fbf11ac0253ab61684b2e2f";
        francescoImg.alt = "italian cook";

        const francesco = document.createElement('div');
        francesco.id = "francesco";
        francesco.textContent = "Francesco";

        const text2 = document.createElement('div');
        text2.classList.add('text', 'Chef');
        text2.textContent = "This is Francesco. He is our best cook, so be nice to him.";

        meetChef.appendChild(meetChefTitle);
        meetChef.appendChild(francescoImg);
        meetChef.appendChild(francesco);
        meetChef.appendChild(text2);

        container.appendChild(about);
        container.appendChild(meetChef);

        const impressum = document.createElement('div');
        impressum.classList.add('impressum');

        const career = document.createElement('div');
        career.classList.add('career');
        const link1 = document.createElement('a');
        link1.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link1.target = "_blank";
        link1.rel = "noopener noreferrer";
        link1.textContent = "Career at Bella Partia";
        career.appendChild(link1);

        const contact = document.createElement('div');
        contact.classList.add('contact');
        const link2 = document.createElement('a');
        link2.classList.add('contactLink');
        link2.textContent = "Contact";
        contact.appendChild(link2);

        const dataSecurity = document.createElement('div');
        dataSecurity.classList.add('dataSecurity');
        const link3 = document.createElement('a');
        link3.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        link3.target = "_blank";
        link3.rel = "noopener noreferrer";
        link3.textContent = "Data Security";
        dataSecurity.appendChild(link3);

        impressum.appendChild(career);
        impressum.appendChild(contact);
        impressum.appendChild(dataSecurity);

        const credit = document.createElement('div');
        credit.classList.add('credit');
        credit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';

        const text3 = document.createElement('div');
        text3.classList.add('text');
        text3.innerHTML = "&copy; https://github.com/mating02";

        credit.appendChild(text3);

        content.appendChild(panoramaImg);
        content.appendChild(headliner);
        content.appendChild(container);
        content.appendChild(impressum);
        content.appendChild(credit);

        if (selectLang.value === "it") {
            headtitle.textContent = 'Il ristorante Bella Partia';
            link1.textContent = 'Carriera al Bella Partia';
            link2.textContent = 'Contatto';
            link3.textContent = 'La sicurezza dei dati';
            titleAbout.textContent = 'Sulla Bella Partia';
            text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
            meetChefTitle.textContent = 'Incontra lo chef';
            text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
        }
        else {
            headtitle.textContent = 'The Bella Partia Restaurant';
            link1.textContent = 'Career at Bella Partia';
            link2.textContent = 'Contact';
            link3.textContent = 'Data Security';
            titleAbout.textContent = 'About Bella Partia';
            text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
            meetChefTitle.textContent = 'Meet the Chef';
            text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
        }

        selectLang.addEventListener('change', () => {
            if (selectLang.value === "it") {
                headtitle.textContent = 'Il ristorante Bella Partia';
                link1.textContent = 'Carriera al Bella Partia';
                link2.textContent = 'Contatto';
                link3.textContent = 'La sicurezza dei dati';
                titleAbout.textContent = 'Sulla Bella Partia';
                text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
                meetChefTitle.textContent = 'Incontra lo chef';
                text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
            }
            else {
                headtitle.textContent = 'The Bella Partia Restaurant';
                link1.textContent = 'Career at Bella Partia';
                link2.textContent = 'Contact';
                link3.textContent = 'Data Security';
                titleAbout.textContent = 'About Bella Partia';
                text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
                meetChefTitle.textContent = 'Meet the Chef';
                text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
            }    
        });

        buttonMenu.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
    });
};

loadDOM();

function loadHome() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundAttachment = '';
    document.body.style.overflowX = '';


    const about = document.createElement('div');
    about.classList.add('about', 'fade');

    const titleAbout = document.createElement('div');
    titleAbout.classList.add('title', 'about');
    titleAbout.textContent = "About Bella Partia";

    const aboutImages = document.createElement('div');
    aboutImages.classList.add('aboutImages');
    const aboutImg1 = document.createElement('img');
    aboutImg1.classList.add('aboutImg');
    aboutImg1.src = "https://images.unsplash.com/photo-1534650075489-3baecec1e8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
    aboutImg1.alt = "italian restaurant";
    const aboutImg2 = document.createElement('img');
    aboutImg2.classList.add('aboutImg');
    aboutImg2.src = "https://images.squarespace-cdn.com/content/v1/54905286e4b050812345644c/729f506c-d59a-4494-97a7-902e96caf393/Snip20230330_2.png";
    aboutImg2.alt = "location";
    aboutImages.appendChild(aboutImg1);
    aboutImages.appendChild(aboutImg2);

    const text1 = document.createElement('div');
    text1.classList.add('text', 'aboutDiv');
    text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";

    about.appendChild(titleAbout);
    about.appendChild(aboutImages);
    about.appendChild(text1);

    const meetChef = document.createElement('div');
    meetChef.classList.add('meetChef', 'fade');

    const meetChefTitle = document.createElement('div');
    meetChefTitle.classList.add('meetChef', 'title');
    meetChefTitle.textContent = "Meet the Chef";

    const francescoImg = document.createElement('img');
    francescoImg.classList.add('francescoImg');
    francescoImg.src = "https://img.freepik.com/fotos-kostenlos/ausdrucksstarker-junger-mann-posiert-fuer-winterferien_140725-141023.jpg?w=1380&t=st=1696262618~exp=1696263218~hmac=fc96706489b8a3fc4cc74a27e86e7f29bfb2c50b0fbf11ac0253ab61684b2e2f";
    francescoImg.alt = "italian cook";

    const francesco = document.createElement('div');
    francesco.id = "francesco";
    francesco.textContent = "Francesco";

    const text2 = document.createElement('div');
    text2.classList.add('text', 'Chef');
    text2.textContent = "This is Francesco. He is our best cook, so be nice to him.";

    meetChef.appendChild(meetChefTitle);
    meetChef.appendChild(francescoImg);
    meetChef.appendChild(francesco);
    meetChef.appendChild(text2);

    container.appendChild(about);
    container.appendChild(meetChef);

    setTimeout(() => {
        about.classList.add('active');
        meetChef.classList.add('active');
      }, 100);

    const selectLang = document.getElementById('language');

    if (selectLang.value === "it") {
        titleAbout.textContent = 'Sulla Bella Partia';
        text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
        meetChefTitle.textContent = 'Incontra lo chef';
        text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
    }
    else {
        titleAbout.textContent = 'About Bella Partia';
        text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
        meetChefTitle.textContent = 'Meet the Chef';
        text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
    }

    selectLang.addEventListener('change', () => {
        if (selectLang.value === "it") {
            titleAbout.textContent = 'Sulla Bella Partia';
            text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
            meetChefTitle.textContent = 'Incontra lo chef';
            text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
        }
        else {
            titleAbout.textContent = 'About Bella Partia';
            text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
            meetChefTitle.textContent = 'Meet the Chef';
            text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
        }
    });

}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvRE9NbG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gbG9hZERPTSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBjb25zdCBwYW5vcmFtYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwYW5vcmFtYUltZy5jbGFzc0xpc3QuYWRkKCdwYW5vcmFtYScpO1xuICAgICAgICBwYW5vcmFtYUltZy5zcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDIyLzk2OC8xMjQvb3JpZ2luYWwvaXRhbGlhbi12aWxsYWdlLWNhcnRvb24tbGFuZHNjYXBlLXdpdGgtZ3JlZW4taGlsbHMtYW5kLWZpZWxkcy1pbGx1c3RyYXRpb24tZmxhdC1kZXNpZ24tcG9zdGVyLWV1cm9wZWFuLXN1bW1lci12aWxsYWdlLWV1cm9wZWFuLWNvdW50cnlzaWRlLWluLWZhbGwtY291bnRyeS1ob3VzZXMtdmVjdG9yLmpwZyc7XG4gICAgICAgIHBhbm9yYW1hSW1nLmFsdCA9ICdpdGFsaWFuIGJhY2tncm91bmQnO1xuXG4gICAgICAgIGNvbnN0IGhlYWRsaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkbGluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGxpbmUnKTtcblxuICAgICAgICBjb25zdCBsYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxhbmcuY2xhc3NMaXN0LmFkZCgnbGFuZycpO1xuXG4gICAgICAgIGxhbmcuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZWFydGg8L3RpdGxlPjxwYXRoIGQ9XCJNMTcuOSwxNy4zOUMxNy42NCwxNi41OSAxNi44OSwxNiAxNiwxNkgxNVYxM0ExLDEgMCAwLDAgMTQsMTJIOFYxMEgxMEExLDEgMCAwLDAgMTEsOVY3SDEzQTIsMiAwIDAsMCAxNSw1VjQuNTlDMTcuOTMsNS43NyAyMCw4LjY0IDIwLDEyQzIwLDE0LjA4IDE5LjIsMTUuOTcgMTcuOSwxNy4zOU0xMSwxOS45M0M3LjA1LDE5LjQ0IDQsMTYuMDggNCwxMkM0LDExLjM4IDQuMDgsMTAuNzggNC4yMSwxMC4yMUw5LDE1VjE2QTIsMiAwIDAsMCAxMSwxOE0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RMYW5nLnNldEF0dHJpYnV0ZSgnbmFtZScsICdsYW5ndWFnZScpO1xuICAgICAgICBzZWxlY3RMYW5nLmlkID0gJ2xhbmd1YWdlJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZW4nKTtcbiAgICAgICAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdFTic7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2l0Jyk7XG4gICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSAnSVQnO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXG4gICAgICAgIGxhbmcuYXBwZW5kQ2hpbGQoc2VsZWN0TGFuZyk7XG5cbiAgICAgICAgY29uc3QgaGVhZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWR0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkdGl0bGUnKTtcbiAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIFJlc3RhdXJhbnRcIjtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKCdidXR0b25NZW51Jyk7XG4gICAgICAgIGJ1dHRvbk1lbnUuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bWVudTwvdGl0bGU+PHBhdGggZD1cIk0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uIGhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb24gbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbiBjb250YWN0XCI+Q29udGFjdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobGFuZyk7XG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChoZWFkdGl0bGUpO1xuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVBYm91dC5jbGFzc0xpc3QuYWRkKCd0aXRsZScsICdhYm91dCcpO1xuICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dCBCZWxsYSBQYXJ0aWFcIjtcblxuICAgICAgICBjb25zdCBhYm91dEltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhYm91dEltYWdlcy5jbGFzc0xpc3QuYWRkKCdhYm91dEltYWdlcycpO1xuICAgICAgICBjb25zdCBhYm91dEltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYWJvdXRJbWcxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW1nJyk7XG4gICAgICAgIGFib3V0SW1nMS5zcmMgPSBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM0NjUwMDc1NDg5LTNiYWVjZWMxZThiMT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODBcIjtcbiAgICAgICAgYWJvdXRJbWcxLmFsdCA9IFwiaXRhbGlhbiByZXN0YXVyYW50XCI7XG4gICAgICAgIGNvbnN0IGFib3V0SW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBhYm91dEltZzIuY2xhc3NMaXN0LmFkZCgnYWJvdXRJbWcnKTtcbiAgICAgICAgYWJvdXRJbWcyLnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbS9jb250ZW50L3YxLzU0OTA1Mjg2ZTRiMDUwODEyMzQ1NjQ0Yy83MjlmNTA2Yy1kNTlhLTQ0OTQtOTdhNy05MDJlOTZjYWYzOTMvU25pcDIwMjMwMzMwXzIucG5nXCI7XG4gICAgICAgIGFib3V0SW1nMi5hbHQgPSBcImxvY2F0aW9uXCI7XG4gICAgICAgIGFib3V0SW1hZ2VzLmFwcGVuZENoaWxkKGFib3V0SW1nMSk7XG4gICAgICAgIGFib3V0SW1hZ2VzLmFwcGVuZENoaWxkKGFib3V0SW1nMik7XG5cbiAgICAgICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgndGV4dCcsICdhYm91dERpdicpO1xuICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiVGhlIEJlbGxhIFBhcnRpYSByZXN0YXVyYW50IGlzIHNpdHVhdGVkIGluIERpc25leWxhbmQsIEt1cmRpc3RhbiBhbmQgaXMgdGhlIEJFU1QgaXRhbGlhbiByZXN0YXVyYW50IHdvcmxkd2lkZSEgQXNpZGUgZnJvbSBvdXIgdHJhZGl0aW9uYWwgSXRhbGlhbiBkaXNoZXMsIHdlIGFsc28gaGF2ZSBtb3V0aC13YXRlcmluZyBzcGVjaWFsdGllcyBmcm9tIG90aGVyIGN1bHR1cmVzLCBlc3BlY2lhbGx5IENoaW5lc2UsIGFzIHdlbGwhIEdvIHRha2UgYSBsb29rIGF0IG91ciBtZW51ISBcIjtcblxuICAgICAgICBhYm91dC5hcHBlbmRDaGlsZCh0aXRsZUFib3V0KTtcbiAgICAgICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZXMpO1xuICAgICAgICBhYm91dC5hcHBlbmRDaGlsZCh0ZXh0MSk7XG5cbiAgICAgICAgY29uc3QgbWVldENoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVldENoZWYuY2xhc3NMaXN0LmFkZCgnbWVldENoZWYnKTtcblxuICAgICAgICBjb25zdCBtZWV0Q2hlZlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lZXRDaGVmVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVldENoZWYnLCAndGl0bGUnKTtcbiAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVldCB0aGUgQ2hlZlwiO1xuXG4gICAgICAgIGNvbnN0IGZyYW5jZXNjb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBmcmFuY2VzY29JbWcuY2xhc3NMaXN0LmFkZCgnZnJhbmNlc2NvSW1nJyk7XG4gICAgICAgIGZyYW5jZXNjb0ltZy5zcmMgPSBcImh0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZvdG9zLWtvc3Rlbmxvcy9hdXNkcnVja3NzdGFya2VyLWp1bmdlci1tYW5uLXBvc2llcnQtZnVlci13aW50ZXJmZXJpZW5fMTQwNzI1LTE0MTAyMy5qcGc/dz0xMzgwJnQ9c3Q9MTY5NjI2MjYxOH5leHA9MTY5NjI2MzIxOH5obWFjPWZjOTY3MDY0ODliOGEzZmM0Y2M3NGEyN2U4NmU3ZjI5YmZiMmM1MGIwZmJmMTFhYzAyNTNhYjYxNjg0YjJlMmZcIjtcbiAgICAgICAgZnJhbmNlc2NvSW1nLmFsdCA9IFwiaXRhbGlhbiBjb29rXCI7XG5cbiAgICAgICAgY29uc3QgZnJhbmNlc2NvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZyYW5jZXNjby5pZCA9IFwiZnJhbmNlc2NvXCI7XG4gICAgICAgIGZyYW5jZXNjby50ZXh0Q29udGVudCA9IFwiRnJhbmNlc2NvXCI7XG5cbiAgICAgICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dDIuY2xhc3NMaXN0LmFkZCgndGV4dCcsICdDaGVmJyk7XG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIEZyYW5jZXNjby4gSGUgaXMgb3VyIGJlc3QgY29vaywgc28gYmUgbmljZSB0byBoaW0uXCI7XG5cbiAgICAgICAgbWVldENoZWYuYXBwZW5kQ2hpbGQobWVldENoZWZUaXRsZSk7XG4gICAgICAgIG1lZXRDaGVmLmFwcGVuZENoaWxkKGZyYW5jZXNjb0ltZyk7XG4gICAgICAgIG1lZXRDaGVmLmFwcGVuZENoaWxkKGZyYW5jZXNjbyk7XG4gICAgICAgIG1lZXRDaGVmLmFwcGVuZENoaWxkKHRleHQyKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVldENoZWYpO1xuXG4gICAgICAgIGNvbnN0IGltcHJlc3N1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbXByZXNzdW0uY2xhc3NMaXN0LmFkZCgnaW1wcmVzc3VtJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmVlci5jbGFzc0xpc3QuYWRkKCdjYXJlZXInKTtcbiAgICAgICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsxLmhyZWYgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIjtcbiAgICAgICAgbGluazEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgICAgbGluazEucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgICAgIGxpbmsxLnRleHRDb250ZW50ID0gXCJDYXJlZXIgYXQgQmVsbGEgUGFydGlhXCI7XG4gICAgICAgIGNhcmVlci5hcHBlbmRDaGlsZChsaW5rMSk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICAgICAgY29uc3QgbGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RMaW5rJyk7XG4gICAgICAgIGxpbmsyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobGluazIpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFTZWN1cml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRhU2VjdXJpdHkuY2xhc3NMaXN0LmFkZCgnZGF0YVNlY3VyaXR5Jyk7XG4gICAgICAgIGNvbnN0IGxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rMy5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRXCI7XG4gICAgICAgIGxpbmszLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgIGxpbmszLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9IFwiRGF0YSBTZWN1cml0eVwiO1xuICAgICAgICBkYXRhU2VjdXJpdHkuYXBwZW5kQ2hpbGQobGluazMpO1xuXG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChjYXJlZXIpO1xuICAgICAgICBpbXByZXNzdW0uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChkYXRhU2VjdXJpdHkpO1xuXG4gICAgICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVkaXQuY2xhc3NMaXN0LmFkZCgnY3JlZGl0Jyk7XG4gICAgICAgIGNyZWRpdC5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJ3aGl0ZVwiPjx0aXRsZT5naXRodWI8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dDMuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICB0ZXh0My5pbm5lckhUTUwgPSBcIiZjb3B5OyBodHRwczovL2dpdGh1Yi5jb20vbWF0aW5nMDJcIjtcblxuICAgICAgICBjcmVkaXQuYXBwZW5kQ2hpbGQodGV4dDMpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFub3JhbWFJbWcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbXByZXNzdW0pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdExhbmcudmFsdWUgPT09IFwiaXRcIikge1xuICAgICAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gJ0lsIHJpc3RvcmFudGUgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgIGxpbmsxLnRleHRDb250ZW50ID0gJ0NhcnJpZXJhIGFsIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICBsaW5rMi50ZXh0Q29udGVudCA9ICdDb250YXR0byc7XG4gICAgICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9ICdMYSBzaWN1cmV6emEgZGVpIGRhdGknO1xuICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdTdWxsYSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIklsIHJpc3RvcmFudGUgQmVsbGEgUGFydGlhIHNpIHRyb3ZhIGEgRGlzbmV5bGFuZCwgaW4gS3VyZGlzdGFuIGVkIMOoIGlsIE1JR0xJT1IgcmlzdG9yYW50ZSBpdGFsaWFubyBhbCBtb25kbyEgT2x0cmUgYWkgbm9zdHJpIHBpYXR0aSB0cmFkaXppb25hbGkgaXRhbGlhbmksIGFiYmlhbW8gYW5jaGUgZGVsaXppb3NlIHNwZWNpYWxpdMOgIGRpIGFsdHJlIGN1bHR1cmUsIHNvcHJhdHR1dHRvIGNpbmVzaSEgQW5kYXRlIGEgZGFyZSB1bidvY2NoaWF0YSBhbCBub3N0cm8gbWVuw7khXCI7XG4gICAgICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gJ0luY29udHJhIGxvIGNoZWYnO1xuICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnUXVlc3RvIMOoIEZyYW5jZXNjby4gw4ggaWwgbm9zdHJvIG1pZ2xpb3IgY3VvY28sIHF1aW5kaSBzaWkgZ2VudGlsZSBjb24gbHVpLic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIEJlbGxhIFBhcnRpYSBSZXN0YXVyYW50JztcbiAgICAgICAgICAgIGxpbmsxLnRleHRDb250ZW50ID0gJ0NhcmVlciBhdCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgbGluazIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9ICdEYXRhIFNlY3VyaXR5JztcbiAgICAgICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIHJlc3RhdXJhbnQgaXMgc2l0dWF0ZWQgaW4gRGlzbmV5bGFuZCwgS3VyZGlzdGFuIGFuZCBpcyB0aGUgQkVTVCBpdGFsaWFuIHJlc3RhdXJhbnQgd29ybGR3aWRlISBBc2lkZSBmcm9tIG91ciB0cmFkaXRpb25hbCBJdGFsaWFuIGRpc2hlcywgd2UgYWxzbyBoYXZlIG1vdXRoLXdhdGVyaW5nIHNwZWNpYWx0aWVzIGZyb20gb3RoZXIgY3VsdHVyZXMsIGVzcGVjaWFsbHkgQ2hpbmVzZSwgYXMgd2VsbCEgR28gdGFrZSBhIGxvb2sgYXQgb3VyIG1lbnUhIFwiO1xuICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IHRoZSBDaGVmJztcbiAgICAgICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgRnJhbmNlc2NvLiBIZSBpcyBvdXIgYmVzdCBjb29rLCBzbyBiZSBuaWNlIHRvIGhpbS4nO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0TGFuZy52YWx1ZSA9PT0gXCJpdFwiKSB7XG4gICAgICAgICAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gJ0lsIHJpc3RvcmFudGUgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICBsaW5rMS50ZXh0Q29udGVudCA9ICdDYXJyaWVyYSBhbCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIGxpbmsyLnRleHRDb250ZW50ID0gJ0NvbnRhdHRvJztcbiAgICAgICAgICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9ICdMYSBzaWN1cmV6emEgZGVpIGRhdGknO1xuICAgICAgICAgICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnU3VsbGEgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSWwgcmlzdG9yYW50ZSBCZWxsYSBQYXJ0aWEgc2kgdHJvdmEgYSBEaXNuZXlsYW5kLCBpbiBLdXJkaXN0YW4gZWQgw6ggaWwgTUlHTElPUiByaXN0b3JhbnRlIGl0YWxpYW5vIGFsIG1vbmRvISBPbHRyZSBhaSBub3N0cmkgcGlhdHRpIHRyYWRpemlvbmFsaSBpdGFsaWFuaSwgYWJiaWFtbyBhbmNoZSBkZWxpemlvc2Ugc3BlY2lhbGl0w6AgZGkgYWx0cmUgY3VsdHVyZSwgc29wcmF0dHV0dG8gY2luZXNpISBBbmRhdGUgYSBkYXJlIHVuJ29jY2hpYXRhIGFsIG5vc3RybyBtZW7DuSFcIjtcbiAgICAgICAgICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gJ0luY29udHJhIGxvIGNoZWYnO1xuICAgICAgICAgICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1F1ZXN0byDDqCBGcmFuY2VzY28uIMOIIGlsIG5vc3RybyBtaWdsaW9yIGN1b2NvLCBxdWluZGkgc2lpIGdlbnRpbGUgY29uIGx1aS4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBCZWxsYSBQYXJ0aWEgUmVzdGF1cmFudCc7XG4gICAgICAgICAgICAgICAgbGluazEudGV4dENvbnRlbnQgPSAnQ2FyZWVyIGF0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgbGluazIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgICAgICAgICAgICAgbGluazMudGV4dENvbnRlbnQgPSAnRGF0YSBTZWN1cml0eSc7XG4gICAgICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIHJlc3RhdXJhbnQgaXMgc2l0dWF0ZWQgaW4gRGlzbmV5bGFuZCwgS3VyZGlzdGFuIGFuZCBpcyB0aGUgQkVTVCBpdGFsaWFuIHJlc3RhdXJhbnQgd29ybGR3aWRlISBBc2lkZSBmcm9tIG91ciB0cmFkaXRpb25hbCBJdGFsaWFuIGRpc2hlcywgd2UgYWxzbyBoYXZlIG1vdXRoLXdhdGVyaW5nIHNwZWNpYWx0aWVzIGZyb20gb3RoZXIgY3VsdHVyZXMsIGVzcGVjaWFsbHkgQ2hpbmVzZSwgYXMgd2VsbCEgR28gdGFrZSBhIGxvb2sgYXQgb3VyIG1lbnUhIFwiO1xuICAgICAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnTWVldCB0aGUgQ2hlZic7XG4gICAgICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBGcmFuY2VzY28uIEhlIGlzIG91ciBiZXN0IGNvb2ssIHNvIGJlIG5pY2UgdG8gaGltLic7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxubG9hZERPTSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSAnJztcblxuXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICdmYWRlJyk7XG5cbiAgICBjb25zdCB0aXRsZUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVBYm91dC5jbGFzc0xpc3QuYWRkKCd0aXRsZScsICdhYm91dCcpO1xuICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0IEJlbGxhIFBhcnRpYVwiO1xuXG4gICAgY29uc3QgYWJvdXRJbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEltYWdlcy5jbGFzc0xpc3QuYWRkKCdhYm91dEltYWdlcycpO1xuICAgIGNvbnN0IGFib3V0SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFib3V0SW1nMS5jbGFzc0xpc3QuYWRkKCdhYm91dEltZycpO1xuICAgIGFib3V0SW1nMS5zcmMgPSBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM0NjUwMDc1NDg5LTNiYWVjZWMxZThiMT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODBcIjtcbiAgICBhYm91dEltZzEuYWx0ID0gXCJpdGFsaWFuIHJlc3RhdXJhbnRcIjtcbiAgICBjb25zdCBhYm91dEltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhYm91dEltZzIuY2xhc3NMaXN0LmFkZCgnYWJvdXRJbWcnKTtcbiAgICBhYm91dEltZzIuc3JjID0gXCJodHRwczovL2ltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tL2NvbnRlbnQvdjEvNTQ5MDUyODZlNGIwNTA4MTIzNDU2NDRjLzcyOWY1MDZjLWQ1OWEtNDQ5NC05N2E3LTkwMmU5NmNhZjM5My9TbmlwMjAyMzAzMzBfMi5wbmdcIjtcbiAgICBhYm91dEltZzIuYWx0ID0gXCJsb2NhdGlvblwiO1xuICAgIGFib3V0SW1hZ2VzLmFwcGVuZENoaWxkKGFib3V0SW1nMSk7XG4gICAgYWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoYWJvdXRJbWcyKTtcblxuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgndGV4dCcsICdhYm91dERpdicpO1xuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIHJlc3RhdXJhbnQgaXMgc2l0dWF0ZWQgaW4gRGlzbmV5bGFuZCwgS3VyZGlzdGFuIGFuZCBpcyB0aGUgQkVTVCBpdGFsaWFuIHJlc3RhdXJhbnQgd29ybGR3aWRlISBBc2lkZSBmcm9tIG91ciB0cmFkaXRpb25hbCBJdGFsaWFuIGRpc2hlcywgd2UgYWxzbyBoYXZlIG1vdXRoLXdhdGVyaW5nIHNwZWNpYWx0aWVzIGZyb20gb3RoZXIgY3VsdHVyZXMsIGVzcGVjaWFsbHkgQ2hpbmVzZSwgYXMgd2VsbCEgR28gdGFrZSBhIGxvb2sgYXQgb3VyIG1lbnUhIFwiO1xuXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQodGl0bGVBYm91dCk7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZXMpO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgIGNvbnN0IG1lZXRDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVldENoZWYuY2xhc3NMaXN0LmFkZCgnbWVldENoZWYnLCAnZmFkZScpO1xuXG4gICAgY29uc3QgbWVldENoZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lZXRDaGVmVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVldENoZWYnLCAndGl0bGUnKTtcbiAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gXCJNZWV0IHRoZSBDaGVmXCI7XG5cbiAgICBjb25zdCBmcmFuY2VzY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmcmFuY2VzY29JbWcuY2xhc3NMaXN0LmFkZCgnZnJhbmNlc2NvSW1nJyk7XG4gICAgZnJhbmNlc2NvSW1nLnNyYyA9IFwiaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZm90b3Mta29zdGVubG9zL2F1c2RydWNrc3N0YXJrZXItanVuZ2VyLW1hbm4tcG9zaWVydC1mdWVyLXdpbnRlcmZlcmllbl8xNDA3MjUtMTQxMDIzLmpwZz93PTEzODAmdD1zdD0xNjk2MjYyNjE4fmV4cD0xNjk2MjYzMjE4fmhtYWM9ZmM5NjcwNjQ4OWI4YTNmYzRjYzc0YTI3ZTg2ZTdmMjliZmIyYzUwYjBmYmYxMWFjMDI1M2FiNjE2ODRiMmUyZlwiO1xuICAgIGZyYW5jZXNjb0ltZy5hbHQgPSBcIml0YWxpYW4gY29va1wiO1xuXG4gICAgY29uc3QgZnJhbmNlc2NvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJhbmNlc2NvLmlkID0gXCJmcmFuY2VzY29cIjtcbiAgICBmcmFuY2VzY28udGV4dENvbnRlbnQgPSBcIkZyYW5jZXNjb1wiO1xuXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCd0ZXh0JywgJ0NoZWYnKTtcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBGcmFuY2VzY28uIEhlIGlzIG91ciBiZXN0IGNvb2ssIHNvIGJlIG5pY2UgdG8gaGltLlwiO1xuXG4gICAgbWVldENoZWYuYXBwZW5kQ2hpbGQobWVldENoZWZUaXRsZSk7XG4gICAgbWVldENoZWYuYXBwZW5kQ2hpbGQoZnJhbmNlc2NvSW1nKTtcbiAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZChmcmFuY2VzY28pO1xuICAgIG1lZXRDaGVmLmFwcGVuZENoaWxkKHRleHQyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lZXRDaGVmKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbWVldENoZWYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9LCAxMDApO1xuXG4gICAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5ndWFnZScpO1xuXG4gICAgaWYgKHNlbGVjdExhbmcudmFsdWUgPT09IFwiaXRcIikge1xuICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ1N1bGxhIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSBzaSB0cm92YSBhIERpc25leWxhbmQsIGluIEt1cmRpc3RhbiBlZCDDqCBpbCBNSUdMSU9SIHJpc3RvcmFudGUgaXRhbGlhbm8gYWwgbW9uZG8hIE9sdHJlIGFpIG5vc3RyaSBwaWF0dGkgdHJhZGl6aW9uYWxpIGl0YWxpYW5pLCBhYmJpYW1vIGFuY2hlIGRlbGl6aW9zZSBzcGVjaWFsaXTDoCBkaSBhbHRyZSBjdWx0dXJlLCBzb3ByYXR0dXR0byBjaW5lc2khIEFuZGF0ZSBhIGRhcmUgdW4nb2NjaGlhdGEgYWwgbm9zdHJvIG1lbsO5IVwiO1xuICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gJ0luY29udHJhIGxvIGNoZWYnO1xuICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdRdWVzdG8gw6ggRnJhbmNlc2NvLiDDiCBpbCBub3N0cm8gbWlnbGlvciBjdW9jbywgcXVpbmRpIHNpaSBnZW50aWxlIGNvbiBsdWkuJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQgQmVsbGEgUGFydGlhJztcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG4gICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnTWVldCB0aGUgQ2hlZic7XG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgRnJhbmNlc2NvLiBIZSBpcyBvdXIgYmVzdCBjb29rLCBzbyBiZSBuaWNlIHRvIGhpbS4nO1xuICAgIH1cblxuICAgIHNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0TGFuZy52YWx1ZSA9PT0gXCJpdFwiKSB7XG4gICAgICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ1N1bGxhIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSWwgcmlzdG9yYW50ZSBCZWxsYSBQYXJ0aWEgc2kgdHJvdmEgYSBEaXNuZXlsYW5kLCBpbiBLdXJkaXN0YW4gZWQgw6ggaWwgTUlHTElPUiByaXN0b3JhbnRlIGl0YWxpYW5vIGFsIG1vbmRvISBPbHRyZSBhaSBub3N0cmkgcGlhdHRpIHRyYWRpemlvbmFsaSBpdGFsaWFuaSwgYWJiaWFtbyBhbmNoZSBkZWxpemlvc2Ugc3BlY2lhbGl0w6AgZGkgYWx0cmUgY3VsdHVyZSwgc29wcmF0dHV0dG8gY2luZXNpISBBbmRhdGUgYSBkYXJlIHVuJ29jY2hpYXRhIGFsIG5vc3RybyBtZW7DuSFcIjtcbiAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnSW5jb250cmEgbG8gY2hlZic7XG4gICAgICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdRdWVzdG8gw6ggRnJhbmNlc2NvLiDDiCBpbCBub3N0cm8gbWlnbGlvciBjdW9jbywgcXVpbmRpIHNpaSBnZW50aWxlIGNvbiBsdWkuJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIHJlc3RhdXJhbnQgaXMgc2l0dWF0ZWQgaW4gRGlzbmV5bGFuZCwgS3VyZGlzdGFuIGFuZCBpcyB0aGUgQkVTVCBpdGFsaWFuIHJlc3RhdXJhbnQgd29ybGR3aWRlISBBc2lkZSBmcm9tIG91ciB0cmFkaXRpb25hbCBJdGFsaWFuIGRpc2hlcywgd2UgYWxzbyBoYXZlIG1vdXRoLXdhdGVyaW5nIHNwZWNpYWx0aWVzIGZyb20gb3RoZXIgY3VsdHVyZXMsIGVzcGVjaWFsbHkgQ2hpbmVzZSwgYXMgd2VsbCEgR28gdGFrZSBhIGxvb2sgYXQgb3VyIG1lbnUhIFwiO1xuICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IHRoZSBDaGVmJztcbiAgICAgICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgRnJhbmNlc2NvLiBIZSBpcyBvdXIgYmVzdCBjb29rLCBzbyBiZSBuaWNlIHRvIGhpbS4nO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==