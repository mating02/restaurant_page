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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu(){
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
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBjb25zdCBwYW5vcmFtYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwYW5vcmFtYUltZy5jbGFzc0xpc3QuYWRkKCdwYW5vcmFtYScpO1xuICAgICAgICBwYW5vcmFtYUltZy5zcmMgPSAnaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDIyLzk2OC8xMjQvb3JpZ2luYWwvaXRhbGlhbi12aWxsYWdlLWNhcnRvb24tbGFuZHNjYXBlLXdpdGgtZ3JlZW4taGlsbHMtYW5kLWZpZWxkcy1pbGx1c3RyYXRpb24tZmxhdC1kZXNpZ24tcG9zdGVyLWV1cm9wZWFuLXN1bW1lci12aWxsYWdlLWV1cm9wZWFuLWNvdW50cnlzaWRlLWluLWZhbGwtY291bnRyeS1ob3VzZXMtdmVjdG9yLmpwZyc7XG4gICAgICAgIHBhbm9yYW1hSW1nLmFsdCA9ICdpdGFsaWFuIGJhY2tncm91bmQnO1xuXG4gICAgICAgIGNvbnN0IGhlYWRsaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkbGluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGxpbmUnKTtcblxuICAgICAgICBjb25zdCBsYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxhbmcuY2xhc3NMaXN0LmFkZCgnbGFuZycpO1xuICAgICAgICBcbiAgICAgICAgbGFuZy5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5lYXJ0aDwvdGl0bGU+PHBhdGggZD1cIk0xNy45LDE3LjM5QzE3LjY0LDE2LjU5IDE2Ljg5LDE2IDE2LDE2SDE1VjEzQTEsMSAwIDAsMCAxNCwxMkg4VjEwSDEwQTEsMSAwIDAsMCAxMSw5VjdIMTNBMiwyIDAgMCwwIDE1LDVWNC41OUMxNy45Myw1Ljc3IDIwLDguNjQgMjAsMTJDMjAsMTQuMDggMTkuMiwxNS45NyAxNy45LDE3LjM5TTExLDE5LjkzQzcuMDUsMTkuNDQgNCwxNi4wOCA0LDEyQzQsMTEuMzggNC4wOCwxMC43OCA0LjIxLDEwLjIxTDksMTVWMTZBMiwyIDAgMCwwIDExLDE4TTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+JztcblxuICAgICAgICBjb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdExhbmcuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xhbmd1YWdlJyk7XG4gICAgICAgIHNlbGVjdExhbmcuaWQgPSAnbGFuZ3VhZ2UnO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdlbicpO1xuICAgICAgICBvcHRpb24xLnRleHRDb250ZW50ID0gJ0VOJztcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaXQnKTtcbiAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdJVCc7XG4gICAgICAgIHNlbGVjdExhbmcuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIHNlbGVjdExhbmcuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG5cbiAgICAgICAgbGFuZy5hcHBlbmRDaGlsZChzZWxlY3RMYW5nKTtcblxuICAgICAgICBjb25zdCBoZWFkdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWR0aXRsZScpO1xuICAgICAgICBoZWFkdGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBCZWxsYSBQYXJ0aWEgUmVzdGF1cmFudFwiO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25NZW51LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbk1lbnUnKTtcbiAgICAgICAgYnV0dG9uTWVudS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5tZW51PC90aXRsZT48cGF0aCBkPVwiTTMsNkgyMVY4SDNWNk0zLDExSDIxVjEzSDNWMTFNMywxNkgyMVYxOEgzVjE2WlwiIC8+PC9zdmc+JztcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb24gaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbiBtZW51XCI+TWVudTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uIGNvbnRhY3RcIj5Db250YWN0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uTWVudSk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChsYW5nKTtcbiAgICAgICAgaGVhZGxpbmVyLmFwcGVuZENoaWxkKGhlYWR0aXRsZSk7XG4gICAgICAgIGhlYWRsaW5lci5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgICAgICBjb25zdCBpbXByZXNzdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1wcmVzc3VtLmNsYXNzTGlzdC5hZGQoJ2ltcHJlc3N1bScpO1xuXG4gICAgICAgIGNvbnN0IGNhcmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJlZXIuY2xhc3NMaXN0LmFkZCgnY2FyZWVyJyk7XG4gICAgICAgIGNvbnN0IGxpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rMS5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRXCI7XG4gICAgICAgIGxpbmsxLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICAgIGxpbmsxLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgICBsaW5rMS50ZXh0Q29udGVudCA9IFwiQ2FyZWVyIGF0IEJlbGxhIFBhcnRpYVwiO1xuICAgICAgICBjYXJlZXIuYXBwZW5kQ2hpbGQobGluazEpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rMi5ocmVmID0gXCJcIjtcbiAgICAgICAgbGluazIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChsaW5rMik7XG5cbiAgICAgICAgY29uc3QgZGF0YVNlY3VyaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGFTZWN1cml0eS5jbGFzc0xpc3QuYWRkKCdkYXRhU2VjdXJpdHknKTtcbiAgICAgICAgY29uc3QgbGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmszLmhyZWYgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIjtcbiAgICAgICAgbGluazMudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgICAgbGluazMucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gICAgICAgIGxpbmszLnRleHRDb250ZW50ID0gXCJEYXRhIFNlY3VyaXR5XCI7XG4gICAgICAgIGRhdGFTZWN1cml0eS5hcHBlbmRDaGlsZChsaW5rMyk7XG5cbiAgICAgICAgaW1wcmVzc3VtLmFwcGVuZENoaWxkKGNhcmVlcik7XG4gICAgICAgIGltcHJlc3N1bS5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICAgICAgaW1wcmVzc3VtLmFwcGVuZENoaWxkKGRhdGFTZWN1cml0eSk7XG5cbiAgICAgICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWRpdC5jbGFzc0xpc3QuYWRkKCdjcmVkaXQnKTtcbiAgICAgICAgY3JlZGl0LmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIndoaXRlXCI+PHRpdGxlPmdpdGh1YjwvdGl0bGU+PHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+JztcblxuICAgICAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0My5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgICAgIHRleHQzLmlubmVySFRNTCA9IFwiJmNvcHk7IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRpbmcwMlwiO1xuXG4gICAgICAgIGNyZWRpdC5hcHBlbmRDaGlsZCh0ZXh0Myk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYW5vcmFtYUltZyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVldENoZWYpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGltcHJlc3N1bSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICAgICAgICBzZWxlY3RMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNlbGVjdExhbmcudmFsdWUgPT09IFwiaXRcIil7XG4gICAgICAgICAgICAgICAgaGVhZHRpdGxlLnRleHRDb250ZW50ID0gJ0lsIHJpc3RvcmFudGUgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICB0aXRsZUFib3V0LnRleHRDb250ZW50ID0gJ1N1bGxhIEJlbGxhIFBhcnRpYSc7XG4gICAgICAgICAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIklsIHJpc3RvcmFudGUgQmVsbGEgUGFydGlhIHNpIHRyb3ZhIGEgRGlzbmV5bGFuZCwgaW4gS3VyZGlzdGFuIGVkIMOoIGlsIE1JR0xJT1IgcmlzdG9yYW50ZSBpdGFsaWFubyBhbCBtb25kbyEgT2x0cmUgYWkgbm9zdHJpIHBpYXR0aSB0cmFkaXppb25hbGkgaXRhbGlhbmksIGFiYmlhbW8gYW5jaGUgZGVsaXppb3NlIHNwZWNpYWxpdMOgIGRpIGFsdHJlIGN1bHR1cmUsIHNvcHJhdHR1dHRvIGNpbmVzaSEgQW5kYXRlIGEgZGFyZSB1bidvY2NoaWF0YSBhbCBub3N0cm8gbWVuw7khXCI7XG4gICAgICAgICAgICAgICAgbWVldENoZWZUaXRsZS50ZXh0Q29udGVudCA9ICdJbmNvbnRyYSBsbyBjaGVmJztcbiAgICAgICAgICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdRdWVzdG8gw6ggRnJhbmNlc2NvLiDDiCBpbCBub3N0cm8gbWlnbGlvciBjdW9jbywgcXVpbmRpIHNpaSBnZW50aWxlIGNvbiBsdWkuJztcbiAgICAgICAgICAgICAgICBjYXJlZXIudGV4dENvbnRlbnQgPSAnQ2FycmllcmEgYWwgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhdHRvJztcbiAgICAgICAgICAgICAgICBkYXRhU2VjdXJpdHkudGV4dENvbnRlbnQgPSAnTGEgc2ljdXJlenphIGRlaSBkYXRpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWR0aXRsZS50ZXh0Q29udGVudCA9ICdUaGUgQmVsbGEgUGFydGlhIFJlc3RhdXJhbnQnO1xuICAgICAgICAgICAgICAgIHRpdGxlQWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiVGhlIEJlbGxhIFBhcnRpYSByZXN0YXVyYW50IGlzIHNpdHVhdGVkIGluIERpc25leWxhbmQsIEt1cmRpc3RhbiBhbmQgaXMgdGhlIEJFU1QgaXRhbGlhbiByZXN0YXVyYW50IHdvcmxkd2lkZSEgQXNpZGUgZnJvbSBvdXIgdHJhZGl0aW9uYWwgSXRhbGlhbiBkaXNoZXMsIHdlIGFsc28gaGF2ZSBtb3V0aC13YXRlcmluZyBzcGVjaWFsdGllcyBmcm9tIG90aGVyIGN1bHR1cmVzLCBlc3BlY2lhbGx5IENoaW5lc2UsIGFzIHdlbGwhIEdvIHRha2UgYSBsb29rIGF0IG91ciBtZW51ISBcIjtcbiAgICAgICAgICAgICAgICBtZWV0Q2hlZlRpdGxlLnRleHRDb250ZW50ID0gJ01lZXQgdGhlIENoZWYnO1xuICAgICAgICAgICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgRnJhbmNlc2NvLiBIZSBpcyBvdXIgYmVzdCBjb29rLCBzbyBiZSBuaWNlIHRvIGhpbS4nO1xuICAgICAgICAgICAgICAgIGNhcmVlci50ZXh0Q29udGVudCA9ICdDYXJlZXIgYXQgQmVsbGEgUGFydGlhJztcbiAgICAgICAgICAgICAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICAgICAgICAgIGRhdGFTZWN1cml0eS50ZXh0Q29udGVudCA9ICdEYXRhIFNlY3VyaXR5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnV0dG9uTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=