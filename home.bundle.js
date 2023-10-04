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
/* harmony export */   loadDOM: () => (/* binding */ loadDOM)
/* harmony export */ });
function loadDOM() {
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById('content');
        content.innerHTML ='';

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
        link2.href = "";
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
        content.appendChild(about);
        content.appendChild(meetChef);
        content.appendChild(impressum);
        content.appendChild(credit);

        selectLang.addEventListener('change', () => {
            if(selectLang.value === "it"){
                headtitle.textContent = 'Il ristorante Bella Partia';
                titleAbout.textContent = 'Sulla Bella Partia';
                text1.textContent = "Il ristorante Bella Partia si trova a Disneyland, in Kurdistan ed è il MIGLIOR ristorante italiano al mondo! Oltre ai nostri piatti tradizionali italiani, abbiamo anche deliziose specialità di altre culture, soprattutto cinesi! Andate a dare un'occhiata al nostro menù!";
                meetChefTitle.textContent = 'Incontra lo chef';
                text2.textContent = 'Questo è Francesco. È il nostro miglior cuoco, quindi sii gentile con lui.';
                career.textContent = 'Carriera al Bella Partia';
                contact.textContent = 'Contatto';
                dataSecurity.textContent = 'La sicurezza dei dati';
            }
            else {
                headtitle.textContent = 'The Bella Partia Restaurant';
                titleAbout.textContent = 'About Bella Partia';
                text1.textContent = "The Bella Partia restaurant is situated in Disneyland, Kurdistan and is the BEST italian restaurant worldwide! Aside from our traditional Italian dishes, we also have mouth-watering specialties from other cultures, especially Chinese, as well! Go take a look at our menu! ";
                meetChefTitle.textContent = 'Meet the Chef';
                text2.textContent = 'This is Francesco. He is our best cook, so be nice to him.';
                career.textContent = 'Career at Bella Partia';
                contact.textContent = 'Contact';
                dataSecurity.textContent = 'Data Security';
            }
        });

        buttonMenu.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
    });
};

loadDOM();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL0RPTWxvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBsb2FkRE9NKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9Jyc7XG5cbiAgICAgICAgY29uc3QgcGFub3JhbWFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcGFub3JhbWFJbWcuY2xhc3NMaXN0LmFkZCgncGFub3JhbWEnKTtcbiAgICAgICAgcGFub3JhbWFJbWcuc3JjID0gJ2h0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAyMi85NjgvMTI0L29yaWdpbmFsL2l0YWxpYW4tdmlsbGFnZS1jYXJ0b29uLWxhbmRzY2FwZS13aXRoLWdyZWVuLWhpbGxzLWFuZC1maWVsZHMtaWxsdXN0cmF0aW9uLWZsYXQtZGVzaWduLXBvc3Rlci1ldXJvcGVhbi1zdW1tZXItdmlsbGFnZS1ldXJvcGVhbi1jb3VudHJ5c2lkZS1pbi1mYWxsLWNvdW50cnktaG91c2VzLXZlY3Rvci5qcGcnO1xuICAgICAgICBwYW5vcmFtYUltZy5hbHQgPSAnaXRhbGlhbiBiYWNrZ3JvdW5kJztcblxuICAgICAgICBjb25zdCBoZWFkbGluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGxpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRsaW5lJyk7XG5cbiAgICAgICAgY29uc3QgbGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYW5nLmNsYXNzTGlzdC5hZGQoJ2xhbmcnKTtcbiAgICAgICAgXG4gICAgICAgIGxhbmcuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZWFydGg8L3RpdGxlPjxwYXRoIGQ9XCJNMTcuOSwxNy4zOUMxNy42NCwxNi41OSAxNi44OSwxNiAxNiwxNkgxNVYxM0ExLDEgMCAwLDAgMTQsMTJIOFYxMEgxMEExLDEgMCAwLDAgMTEsOVY3SDEzQTIsMiAwIDAsMCAxNSw1VjQuNTlDMTcuOTMsNS43NyAyMCw4LjY0IDIwLDEyQzIwLDE0LjA4IDE5LjIsMTUuOTcgMTcuOSwxNy4zOU0xMSwxOS45M0M3LjA1LDE5LjQ0IDQsMTYuMDggNCwxMkM0LDExLjM4IDQuMDgsMTAuNzggNC4yMSwxMC4yMUw5LDE1VjE2QTIsMiAwIDAsMCAxMSwxOE0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RMYW5nLnNldEF0dHJpYnV0ZSgnbmFtZScsICdsYW5ndWFnZScpO1xuICAgICAgICBzZWxlY3RMYW5nLmlkID0gJ2xhbmd1YWdlJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZW4nKTtcbiAgICAgICAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdFTic7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2l0Jyk7XG4gICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSAnSVQnO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgICAgICBzZWxlY3RMYW5nLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXG4gICAgICAgIGxhbmcuYXBwZW5kQ2hpbGQoc2VsZWN0TGFuZyk7XG5cbiAgICAgICAgY29uc3QgaGVhZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWR0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkdGl0bGUnKTtcbiAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgQmVsbGEgUGFydGlhIFJlc3RhdXJhbnRcIjtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKCdidXR0b25NZW51Jyk7XG4gICAgICAgIGJ1dHRvbk1lbnUuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bWVudTwvdGl0bGU+PHBhdGggZD1cIk0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uIGhvbWVcIj5Ib21lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb24gbWVudVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbiBjb250YWN0XCI+Q29udGFjdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobGFuZyk7XG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChoZWFkdGl0bGUpO1xuICAgICAgICBoZWFkbGluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAgICAgICBjb25zdCB0aXRsZUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlQWJvdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUnLCAnYWJvdXQnKTtcbiAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXQgQmVsbGEgUGFydGlhXCI7XG5cbiAgICAgICAgY29uc3QgYWJvdXRJbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWJvdXRJbWFnZXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRJbWFnZXMnKTtcbiAgICAgICAgY29uc3QgYWJvdXRJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGFib3V0SW1nMS5jbGFzc0xpc3QuYWRkKCdhYm91dEltZycpO1xuICAgICAgICBhYm91dEltZzEuc3JjID0gXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDY1MDA3NTQ4OS0zYmFlY2VjMWU4YjE/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwXCI7XG4gICAgICAgIGFib3V0SW1nMS5hbHQgPSBcIml0YWxpYW4gcmVzdGF1cmFudFwiO1xuICAgICAgICBjb25zdCBhYm91dEltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgYWJvdXRJbWcyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW1nJyk7XG4gICAgICAgIGFib3V0SW1nMi5zcmMgPSBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81NDkwNTI4NmU0YjA1MDgxMjM0NTY0NGMvNzI5ZjUwNmMtZDU5YS00NDk0LTk3YTctOTAyZTk2Y2FmMzkzL1NuaXAyMDIzMDMzMF8yLnBuZ1wiO1xuICAgICAgICBhYm91dEltZzIuYWx0ID0gXCJsb2NhdGlvblwiO1xuICAgICAgICBhYm91dEltYWdlcy5hcHBlbmRDaGlsZChhYm91dEltZzEpO1xuICAgICAgICBhYm91dEltYWdlcy5hcHBlbmRDaGlsZChhYm91dEltZzIpO1xuXG4gICAgICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoJ3RleHQnLCAnYWJvdXREaXYnKTtcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG5cbiAgICAgICAgYWJvdXQuYXBwZW5kQ2hpbGQodGl0bGVBYm91dCk7XG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0SW1hZ2VzKTtcbiAgICAgICAgYWJvdXQuYXBwZW5kQ2hpbGQodGV4dDEpO1xuXG4gICAgICAgIGNvbnN0IG1lZXRDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lZXRDaGVmLmNsYXNzTGlzdC5hZGQoJ21lZXRDaGVmJyk7XG5cbiAgICAgICAgY29uc3QgbWVldENoZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZWV0Q2hlZlRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lZXRDaGVmJywgJ3RpdGxlJyk7XG4gICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSBcIk1lZXQgdGhlIENoZWZcIjtcblxuICAgICAgICBjb25zdCBmcmFuY2VzY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZnJhbmNlc2NvSW1nLmNsYXNzTGlzdC5hZGQoJ2ZyYW5jZXNjb0ltZycpO1xuICAgICAgICBmcmFuY2VzY29JbWcuc3JjID0gXCJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mb3Rvcy1rb3N0ZW5sb3MvYXVzZHJ1Y2tzc3Rhcmtlci1qdW5nZXItbWFubi1wb3NpZXJ0LWZ1ZXItd2ludGVyZmVyaWVuXzE0MDcyNS0xNDEwMjMuanBnP3c9MTM4MCZ0PXN0PTE2OTYyNjI2MTh+ZXhwPTE2OTYyNjMyMTh+aG1hYz1mYzk2NzA2NDg5YjhhM2ZjNGNjNzRhMjdlODZlN2YyOWJmYjJjNTBiMGZiZjExYWMwMjUzYWI2MTY4NGIyZTJmXCI7XG4gICAgICAgIGZyYW5jZXNjb0ltZy5hbHQgPSBcIml0YWxpYW4gY29va1wiO1xuXG4gICAgICAgIGNvbnN0IGZyYW5jZXNjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmcmFuY2VzY28uaWQgPSBcImZyYW5jZXNjb1wiO1xuICAgICAgICBmcmFuY2VzY28udGV4dENvbnRlbnQgPSBcIkZyYW5jZXNjb1wiO1xuXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ3RleHQnLCAnQ2hlZicpO1xuICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBGcmFuY2VzY28uIEhlIGlzIG91ciBiZXN0IGNvb2ssIHNvIGJlIG5pY2UgdG8gaGltLlwiO1xuXG4gICAgICAgIG1lZXRDaGVmLmFwcGVuZENoaWxkKG1lZXRDaGVmVGl0bGUpO1xuICAgICAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZChmcmFuY2VzY29JbWcpO1xuICAgICAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZChmcmFuY2VzY28pO1xuICAgICAgICBtZWV0Q2hlZi5hcHBlbmRDaGlsZCh0ZXh0Mik7XG5cbiAgICAgICAgY29uc3QgaW1wcmVzc3VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltcHJlc3N1bS5jbGFzc0xpc3QuYWRkKCdpbXByZXNzdW0nKTtcblxuICAgICAgICBjb25zdCBjYXJlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZWVyLmNsYXNzTGlzdC5hZGQoJ2NhcmVlcicpO1xuICAgICAgICBjb25zdCBsaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazEuaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUVwiO1xuICAgICAgICBsaW5rMS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBsaW5rMS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgICAgbGluazEudGV4dENvbnRlbnQgPSBcIkNhcmVlciBhdCBCZWxsYSBQYXJ0aWFcIjtcbiAgICAgICAgY2FyZWVyLmFwcGVuZENoaWxkKGxpbmsxKTtcblxuICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgICAgICBjb25zdCBsaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluazIuaHJlZiA9IFwiXCI7XG4gICAgICAgIGxpbmsyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobGluazIpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFTZWN1cml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRhU2VjdXJpdHkuY2xhc3NMaXN0LmFkZCgnZGF0YVNlY3VyaXR5Jyk7XG4gICAgICAgIGNvbnN0IGxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rMy5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRXCI7XG4gICAgICAgIGxpbmszLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgIGxpbmszLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgICBsaW5rMy50ZXh0Q29udGVudCA9IFwiRGF0YSBTZWN1cml0eVwiO1xuICAgICAgICBkYXRhU2VjdXJpdHkuYXBwZW5kQ2hpbGQobGluazMpO1xuXG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChjYXJlZXIpO1xuICAgICAgICBpbXByZXNzdW0uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChkYXRhU2VjdXJpdHkpO1xuXG4gICAgICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVkaXQuY2xhc3NMaXN0LmFkZCgnY3JlZGl0Jyk7XG4gICAgICAgIGNyZWRpdC5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJ3aGl0ZVwiPjx0aXRsZT5naXRodWI8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG5cbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dDMuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICB0ZXh0My5pbm5lckhUTUwgPSBcIiZjb3B5OyBodHRwczovL2dpdGh1Yi5jb20vbWF0aW5nMDJcIjtcblxuICAgICAgICBjcmVkaXQuYXBwZW5kQ2hpbGQodGV4dDMpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFub3JhbWFJbWcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lZXRDaGVmKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbXByZXNzdW0pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICAgICAgc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RMYW5nLnZhbHVlID09PSBcIml0XCIpe1xuICAgICAgICAgICAgICAgIGhlYWR0aXRsZS50ZXh0Q29udGVudCA9ICdJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGl0bGVBYm91dC50ZXh0Q29udGVudCA9ICdTdWxsYSBCZWxsYSBQYXJ0aWEnO1xuICAgICAgICAgICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJJbCByaXN0b3JhbnRlIEJlbGxhIFBhcnRpYSBzaSB0cm92YSBhIERpc25leWxhbmQsIGluIEt1cmRpc3RhbiBlZCDDqCBpbCBNSUdMSU9SIHJpc3RvcmFudGUgaXRhbGlhbm8gYWwgbW9uZG8hIE9sdHJlIGFpIG5vc3RyaSBwaWF0dGkgdHJhZGl6aW9uYWxpIGl0YWxpYW5pLCBhYmJpYW1vIGFuY2hlIGRlbGl6aW9zZSBzcGVjaWFsaXTDoCBkaSBhbHRyZSBjdWx0dXJlLCBzb3ByYXR0dXR0byBjaW5lc2khIEFuZGF0ZSBhIGRhcmUgdW4nb2NjaGlhdGEgYWwgbm9zdHJvIG1lbsO5IVwiO1xuICAgICAgICAgICAgICAgIG1lZXRDaGVmVGl0bGUudGV4dENvbnRlbnQgPSAnSW5jb250cmEgbG8gY2hlZic7XG4gICAgICAgICAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnUXVlc3RvIMOoIEZyYW5jZXNjby4gw4ggaWwgbm9zdHJvIG1pZ2xpb3IgY3VvY28sIHF1aW5kaSBzaWkgZ2VudGlsZSBjb24gbHVpLic7XG4gICAgICAgICAgICAgICAgY2FyZWVyLnRleHRDb250ZW50ID0gJ0NhcnJpZXJhIGFsIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YXR0byc7XG4gICAgICAgICAgICAgICAgZGF0YVNlY3VyaXR5LnRleHRDb250ZW50ID0gJ0xhIHNpY3VyZXp6YSBkZWkgZGF0aSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIEJlbGxhIFBhcnRpYSBSZXN0YXVyYW50JztcbiAgICAgICAgICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgcmVzdGF1cmFudCBpcyBzaXR1YXRlZCBpbiBEaXNuZXlsYW5kLCBLdXJkaXN0YW4gYW5kIGlzIHRoZSBCRVNUIGl0YWxpYW4gcmVzdGF1cmFudCB3b3JsZHdpZGUhIEFzaWRlIGZyb20gb3VyIHRyYWRpdGlvbmFsIEl0YWxpYW4gZGlzaGVzLCB3ZSBhbHNvIGhhdmUgbW91dGgtd2F0ZXJpbmcgc3BlY2lhbHRpZXMgZnJvbSBvdGhlciBjdWx0dXJlcywgZXNwZWNpYWxseSBDaGluZXNlLCBhcyB3ZWxsISBHbyB0YWtlIGEgbG9vayBhdCBvdXIgbWVudSEgXCI7XG4gICAgICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IHRoZSBDaGVmJztcbiAgICAgICAgICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIEZyYW5jZXNjby4gSGUgaXMgb3VyIGJlc3QgY29vaywgc28gYmUgbmljZSB0byBoaW0uJztcbiAgICAgICAgICAgICAgICBjYXJlZXIudGV4dENvbnRlbnQgPSAnQ2FyZWVyIGF0IEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgICAgICAgICBkYXRhU2VjdXJpdHkudGV4dENvbnRlbnQgPSAnRGF0YSBTZWN1cml0eSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5sb2FkRE9NKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=