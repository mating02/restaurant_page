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
function loadMenu() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1507048947301-7afc2aca0edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.overflowX = 'hidden';

    const menuHeadline = document.createElement('div');
    menuHeadline.classList.add('menuHeadline', 'fade');
    menuHeadline.textContent = 'The Menu';

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menuGrid', 'fade');

    const menu1 = document.createElement('div');
    menu1.classList.add('menuDish');
    const menu1Img = document.createElement('img');
    menu1Img.classList.add('menuImage');
    menu1Img.src = 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80';
    menu1Img.alt = 'Pizza Margherita';
    const menu1Title = document.createElement('div');
    menu1Title.classList.add('menuTitle');
    menu1Title.textContent = 'Pizza Margherita';
    const menu1Text = document.createElement('div');
    menu1Text.textContent = "The Pizza Margherita is an Italian classic for people who don't want to gain as much calories. It is served with extra basil on top and of course with a lot of heart and passion.";
    menu1.appendChild(menu1Img);
    menu1.appendChild(menu1Title);
    menu1.appendChild(menu1Text);

    const menu2 = document.createElement('div');
    menu2.classList.add('menuDish');
    const menu2Img = document.createElement('img');
    menu2Img.classList.add('menuImage');
    menu2Img.src = 'https://www.gutekueche.at/storage/media/recipe/120924/P00_Pizza-alla-Siciliana_atba.jpg';
    menu2Img.alt = 'Pizza Siciliana';
    const menu2Title = document.createElement('div');
    menu2Title.classList.add('menuTitle');
    menu2Title.textContent = 'Pizza Siciliana';
    const menu2Text = document.createElement('div');
    menu2Text.textContent = 'Also known as sfincione, Sicilian-style pizza has a thick crust with a fluffy, sponge-like consistency. It is baked in a rectangular shaped pan, topped with tomato sauce, anchovies, onions, oregano, and a hard sheep’s milk cheese.';
    menu2.appendChild(menu2Img);
    menu2.appendChild(menu2Title);
    menu2.appendChild(menu2Text);

    const menu3 = document.createElement('div');
    menu3.classList.add('menuDish');
    const menu3Img = document.createElement('img');
    menu3Img.classList.add('menuImage');
    menu3Img.src = 'https://cdn.gutekueche.de/upload/rezept/5019/1600x1200_pizza-funghi.jpg';
    menu3Img.alt = 'Pizza Funghi';
    const menu3Title = document.createElement('div');
    menu3Title.classList.add('menuTitle');
    menu3Title.textContent = 'Pizza Funghi';
    const menu3Text = document.createElement('div');
    menu3Text.textContent = 'The Pizza Funghi is a world famous Pizza. The Pizza Funghi is topped with the finest aromatic mushrooms, juicy mozzarella and Edam cheeses, and finished with a herb garnish.';
    menu3.appendChild(menu3Img);
    menu3.appendChild(menu3Title);
    menu3.appendChild(menu3Text);

    const menu4 = document.createElement('div');
    menu4.classList.add('menuDish');
    const menu4Img = document.createElement('img');
    menu4Img.classList.add('menuImage');
    menu4Img.src = 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGl6emElMjBUdW5uYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60';
    menu4Img.alt = 'Pizza Salami';
    const menu4Title = document.createElement('div');
    menu4Title.classList.add('menuTitle');
    menu4Title.textContent = 'Pizza Salami';
    const menu4Text = document.createElement('div');
    menu4Text.textContent = 'The Pizza Salami is another classic and popular Pizza. It is seved with tomatoes, mozzarella and spicy salami slices.';
    menu4.appendChild(menu4Img);
    menu4.appendChild(menu4Title);
    menu4.appendChild(menu4Text);

    const menu5 = document.createElement('div');
    menu5.classList.add('menuDish');
    const menu5Img = document.createElement('img');
    menu5Img.classList.add('menuImage');
    menu5Img.src = 'https://images.unsplash.com/photo-1641244999574-5afea228bd26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
    menu5Img.alt = 'Calzone';
    const menu5Title = document.createElement('div');
    menu5Title.classList.add('menuTitle');
    menu5Title.textContent = 'Calzone';
    const menu5Text = document.createElement('div');
    menu5Text.textContent = 'A calzone is an Italian oven-baked turnover, made with leavened dough. It originated in Naples. Our calzone is made from salted bread dough, baked in an oven and is stuffed with salami, mozzarella, ricotta and Parmesan, as well as an egg.';
    menu5.appendChild(menu5Img);
    menu5.appendChild(menu5Title);
    menu5.appendChild(menu5Text);

    const menu6 = document.createElement('div');
    menu6.classList.add('menuDish');
    const menu6Img = document.createElement('img');
    menu6Img.classList.add('menuImage');
    menu6Img.src = 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    menu6Img.alt = 'Spaghetti Bolognese';
    const menu6Title = document.createElement('div');
    menu6Title.classList.add('menuTitle');
    menu6Title.textContent = 'Spaghetti Bolognese';
    const menu6Text = document.createElement('div');
    menu6Text.textContent = "Spaghetti bolognese consists of spaghetti with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy and of course it can't be missing here on our menu.";
    menu6.appendChild(menu6Img);
    menu6.appendChild(menu6Title);
    menu6.appendChild(menu6Text);

    menuGrid.appendChild(menu1);
    menuGrid.appendChild(menu2);
    menuGrid.appendChild(menu3);
    menuGrid.appendChild(menu4);
    menuGrid.appendChild(menu5);
    menuGrid.appendChild(menu6);

    const specialty = document.createElement('div');
    specialty.classList.add('menuHeadline', 'fade');
    specialty.textContent = 'Our honorary House Special';

    const ronaSpecial = document.createElement('div');
    ronaSpecial.classList.add('ronaSpecial', 'fade');

    const GoldenBorder = document.createElement('div');
    GoldenBorder.classList.add('GoldenBorder');

    const ronaSpecialImg = document.createElement('img');
    ronaSpecialImg.classList.add('ronaSpecialImg');
    ronaSpecialImg.src = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ba/e6/1a/disgusting-food-museum.jpg?w=1200&h=1200&s=1';
    ronaSpecialImg.alt = 'The Rona Special';

    GoldenBorder.appendChild(ronaSpecialImg);

    const ronaSpecialTitle = document.createElement('div');
    ronaSpecialTitle.classList.add('ronaSpecialTitle');
    ronaSpecialTitle.textContent = 'The infamous Rona Special';

    const ronaSpecialText = document.createElement('div');
    ronaSpecialText.textContent = `The Rona Special is for all people who want to experience a delicate insight into awe spreading, pandemic causing and pathogenic foods. The Rona Special is simple
    to make but incredibly unique because somehow people don't try this out anymore. Become one of the few who are eager to try.`

    ronaSpecial.appendChild(GoldenBorder);
    ronaSpecial.appendChild(ronaSpecialTitle);
    ronaSpecial.appendChild(ronaSpecialText);

    container.appendChild(menuHeadline);
    container.appendChild(menuGrid);
    container.appendChild(specialty);
    container.appendChild(ronaSpecial);

    setTimeout(() => {
        menuHeadline.classList.add('active');
        menuGrid.classList.add('active');
        specialty.classList.add('active');
        ronaSpecial.classList.add('active');
      }, 100);
    
    const selectLang = document.getElementById('language');

    if (selectLang.value === "it") {
        menuHeadline.textContent = 'Il Menu';
        menu1Text.textContent = "La Pizza Margherita è un classico italiano per le persone che non vogliono assumere tante calorie. Viene servito con basilico extra sopra e ovviamente con tanto cuore e passione.";
        menu2Text.textContent = 'Conosciuta anche come sfincione, la pizza alla siciliana ha una crosta spessa dalla consistenza soffice e soffice. Viene cotto in una teglia di forma rettangolare, condito con salsa di pomodoro, acciughe, cipolle, origano e formaggio di pecora a pasta dura.';
        menu3Text.textContent = "La Pizza Funghi è una Pizza famosa in tutto il mondo. La Pizza Funghi è condita con i migliori funghi aromatici, succosa mozzarella e formaggi Edam e rifinita con un contorno di erbe.";
        menu4Text.textContent = "La Pizza Salame è un'altra Pizza classica e apprezzata. Viene servito con pomodorini, mozzarella e fette di salame piccante.";
        menu5Text.textContent = 'Un calzone è un fatturato italiano al forno, fatto con pasta lievitata. Ha avuto origine a Napoli. Il nostro calzone è fatto con pasta di pane salata, cotta al forno ed è farcito con salame, mozzarella, ricotta e parmigiano, oltre ad un uovo.';
        menu6Text.textContent = "Gli spaghetti alla bolognese sono costituiti da spaghetti con ragù italiano (sugo di carne) a base di carne macinata, pancetta e pomodori, serviti con parmigiano. Gli spaghetti alla bolognese sono uno dei primi piatti più apprezzati fuori dall'Italia e ovviamente non possono mancare qui nel nostro menu.";
        specialty.textContent = 'Il nostro Speciale onorario della Casa';
        ronaSpecialTitle.textContent = 'Il famigerato Rona Speciale';
        ronaSpecialText.textContent = `Lo Speciale Rona è per tutte le persone che vogliono sperimentare una visione delicata della diffusione dello stupore, degli alimenti che causano pandemie e patogeni. Lo Speciale Rona è semplice
    da rendere ma incredibilmente unico perché in qualche modo le persone non lo provano più. Diventa uno dei pochi desiderosi di provare.
        `
    }
    else {
        menuHeadline.textContent = 'The Menu';
        menu1Text.textContent = "The Pizza Margherita is an Italian classic for people who don't want to gain as much calories. It is served with extra basil on top and of course with a lot of heart and passion.";
        menu2Text.textContent = 'Also known as sfincione, Sicilian-style pizza has a thick crust with a fluffy, sponge-like consistency. It is baked in a rectangular shaped pan, topped with tomato sauce, anchovies, onions, oregano, and a hard sheep’s milk cheese.';
        menu3Text.textContent = 'The Pizza Funghi is a world famous Pizza. The Pizza Funghi is topped with the finest aromatic mushrooms, juicy mozzarella and Edam cheeses, and finished with a herb garnish.';
        menu4Text.textContent = 'The Pizza Salami is another classic and popular Pizza. It is seved with tomatoes, mozzarella and spicy salami slices.';
        menu5Text.textContent = 'A calzone is an Italian oven-baked turnover, made with leavened dough. It originated in Naples. Our calzone is made from salted bread dough, baked in an oven and is stuffed with salami, mozzarella, ricotta and Parmesan, as well as an egg.';
        menu6Text.textContent = "Spaghetti bolognese consists of spaghetti with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy and of course it can't be missing here on our menu.";
        specialty.textContent = 'Our honorary House Special';
        ronaSpecialTitle.textContent = 'The infamous Rona Special';
        ronaSpecialText.textContent = `The Rona Special is for all people who want to experience a delicate insight into awe spreading, pandemic causing and pathogenic foods. The Rona Special is simple
    to make but incredibly unique because somehow people don't try this out anymore. Become one of the few who are eager to try.`
    }

    selectLang.addEventListener('change', () => {
        if (selectLang.value === "it") {
            menuHeadline.textContent = 'Il Menu';
            menu1Text.textContent = "La Pizza Margherita è un classico italiano per le persone che non vogliono assumere tante calorie. Viene servito con basilico extra sopra e ovviamente con tanto cuore e passione.";
            menu2Text.textContent = 'Conosciuta anche come sfincione, la pizza alla siciliana ha una crosta spessa dalla consistenza soffice e soffice. Viene cotto in una teglia di forma rettangolare, condito con salsa di pomodoro, acciughe, cipolle, origano e formaggio di pecora a pasta dura.';
            menu3Text.textContent = "La Pizza Funghi è una Pizza famosa in tutto il mondo. La Pizza Funghi è condita con i migliori funghi aromatici, succosa mozzarella e formaggi Edam e rifinita con un contorno di erbe.";
            menu4Text.textContent = "La Pizza Salame è un'altra Pizza classica e apprezzata. Viene servito con pomodorini, mozzarella e fette di salame piccante.";
            menu5Text.textContent = 'Un calzone è un fatturato italiano al forno, fatto con pasta lievitata. Ha avuto origine a Napoli. Il nostro calzone è fatto con pasta di pane salata, cotta al forno ed è farcito con salame, mozzarella, ricotta e parmigiano, oltre ad un uovo.';
            menu6Text.textContent = "Gli spaghetti alla bolognese sono costituiti da spaghetti con ragù italiano (sugo di carne) a base di carne macinata, pancetta e pomodori, serviti con parmigiano. Gli spaghetti alla bolognese sono uno dei primi piatti più apprezzati fuori dall'Italia e ovviamente non possono mancare qui nel nostro menu.";
            specialty.textContent = 'Il nostro Speciale onorario della Casa';
            ronaSpecialTitle.textContent = 'Il famigerato Rona Speciale';
            ronaSpecialText.textContent = `Lo Speciale Rona è per tutte le persone che vogliono sperimentare una visione delicata della diffusione dello stupore, degli alimenti che causano pandemie e patogeni. Lo Speciale Rona è semplice
        da rendere ma incredibilmente unico perché in qualche modo le persone non lo provano più. Diventa uno dei pochi desiderosi di provare.
            `
        }
        else {
            menuHeadline.textContent = 'The Menu';
            menu1Text.textContent = "The Pizza Margherita is an Italian classic for people who don't want to gain as much calories. It is served with extra basil on top and of course with a lot of heart and passion.";
            menu2Text.textContent = 'Also known as sfincione, Sicilian-style pizza has a thick crust with a fluffy, sponge-like consistency. It is baked in a rectangular shaped pan, topped with tomato sauce, anchovies, onions, oregano, and a hard sheep’s milk cheese.';
            menu3Text.textContent = 'The Pizza Funghi is a world famous Pizza. The Pizza Funghi is topped with the finest aromatic mushrooms, juicy mozzarella and Edam cheeses, and finished with a herb garnish.';
            menu4Text.textContent = 'The Pizza Salami is another classic and popular Pizza. It is seved with tomatoes, mozzarella and spicy salami slices.';
            menu5Text.textContent = 'A calzone is an Italian oven-baked turnover, made with leavened dough. It originated in Naples. Our calzone is made from salted bread dough, baked in an oven and is stuffed with salami, mozzarella, ricotta and Parmesan, as well as an egg.';
            menu6Text.textContent = "Spaghetti bolognese consists of spaghetti with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy and of course it can't be missing here on our menu.";
            specialty.textContent = 'Our honorary House Special';
            ronaSpecialTitle.textContent = 'The infamous Rona Special';
            ronaSpecialText.textContent = `The Rona Special is for all people who want to experience a delicate insight into awe spreading, pandemic causing and pathogenic foods. The Rona Special is simple
        to make but incredibly unique because somehow people don't try this out anymore. Become one of the few who are eager to try.`
        }
    });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3MDQ4OTQ3MzAxLTdhZmMyYWNhMGVkYz9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcyJnE9ODApJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gJ2ZpeGVkJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuXG4gICAgY29uc3QgbWVudUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ21lbnVIZWFkbGluZScsICdmYWRlJyk7XG4gICAgbWVudUhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1RoZSBNZW51JztcblxuICAgIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUdyaWQuY2xhc3NMaXN0LmFkZCgnbWVudUdyaWQnLCAnZmFkZScpO1xuXG4gICAgY29uc3QgbWVudTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51MS5jbGFzc0xpc3QuYWRkKCdtZW51RGlzaCcpO1xuICAgIGNvbnN0IG1lbnUxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudTFJbWcuY2xhc3NMaXN0LmFkZCgnbWVudUltYWdlJyk7XG4gICAgbWVudTFJbWcuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk4MDIzNjk2NDE2LTAxOTNhMGJjZDMwMj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMTM2JnE9ODAnO1xuICAgIG1lbnUxSW1nLmFsdCA9ICdQaXp6YSBNYXJnaGVyaXRhJztcbiAgICBjb25zdCBtZW51MVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTFUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcbiAgICBtZW51MVRpdGxlLnRleHRDb250ZW50ID0gJ1BpenphIE1hcmdoZXJpdGEnO1xuICAgIGNvbnN0IG1lbnUxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUxVGV4dC50ZXh0Q29udGVudCA9IFwiVGhlIFBpenphIE1hcmdoZXJpdGEgaXMgYW4gSXRhbGlhbiBjbGFzc2ljIGZvciBwZW9wbGUgd2hvIGRvbid0IHdhbnQgdG8gZ2FpbiBhcyBtdWNoIGNhbG9yaWVzLiBJdCBpcyBzZXJ2ZWQgd2l0aCBleHRyYSBiYXNpbCBvbiB0b3AgYW5kIG9mIGNvdXJzZSB3aXRoIGEgbG90IG9mIGhlYXJ0IGFuZCBwYXNzaW9uLlwiO1xuICAgIG1lbnUxLmFwcGVuZENoaWxkKG1lbnUxSW1nKTtcbiAgICBtZW51MS5hcHBlbmRDaGlsZChtZW51MVRpdGxlKTtcbiAgICBtZW51MS5hcHBlbmRDaGlsZChtZW51MVRleHQpO1xuXG4gICAgY29uc3QgbWVudTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Mi5jbGFzc0xpc3QuYWRkKCdtZW51RGlzaCcpO1xuICAgIGNvbnN0IG1lbnUySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudTJJbWcuY2xhc3NMaXN0LmFkZCgnbWVudUltYWdlJyk7XG4gICAgbWVudTJJbWcuc3JjID0gJ2h0dHBzOi8vd3d3Lmd1dGVrdWVjaGUuYXQvc3RvcmFnZS9tZWRpYS9yZWNpcGUvMTIwOTI0L1AwMF9QaXp6YS1hbGxhLVNpY2lsaWFuYV9hdGJhLmpwZyc7XG4gICAgbWVudTJJbWcuYWx0ID0gJ1BpenphIFNpY2lsaWFuYSc7XG4gICAgY29uc3QgbWVudTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUyVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gICAgbWVudTJUaXRsZS50ZXh0Q29udGVudCA9ICdQaXp6YSBTaWNpbGlhbmEnO1xuICAgIGNvbnN0IG1lbnUyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUyVGV4dC50ZXh0Q29udGVudCA9ICdBbHNvIGtub3duIGFzIHNmaW5jaW9uZSwgU2ljaWxpYW4tc3R5bGUgcGl6emEgaGFzIGEgdGhpY2sgY3J1c3Qgd2l0aCBhIGZsdWZmeSwgc3BvbmdlLWxpa2UgY29uc2lzdGVuY3kuIEl0IGlzIGJha2VkIGluIGEgcmVjdGFuZ3VsYXIgc2hhcGVkIHBhbiwgdG9wcGVkIHdpdGggdG9tYXRvIHNhdWNlLCBhbmNob3ZpZXMsIG9uaW9ucywgb3JlZ2FubywgYW5kIGEgaGFyZCBzaGVlcOKAmXMgbWlsayBjaGVlc2UuJztcbiAgICBtZW51Mi5hcHBlbmRDaGlsZChtZW51MkltZyk7XG4gICAgbWVudTIuYXBwZW5kQ2hpbGQobWVudTJUaXRsZSk7XG4gICAgbWVudTIuYXBwZW5kQ2hpbGQobWVudTJUZXh0KTtcblxuICAgIGNvbnN0IG1lbnUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTMuY2xhc3NMaXN0LmFkZCgnbWVudURpc2gnKTtcbiAgICBjb25zdCBtZW51M0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnUzSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWFnZScpO1xuICAgIG1lbnUzSW1nLnNyYyA9ICdodHRwczovL2Nkbi5ndXRla3VlY2hlLmRlL3VwbG9hZC9yZXplcHQvNTAxOS8xNjAweDEyMDBfcGl6emEtZnVuZ2hpLmpwZyc7XG4gICAgbWVudTNJbWcuYWx0ID0gJ1BpenphIEZ1bmdoaSc7XG4gICAgY29uc3QgbWVudTNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUzVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gICAgbWVudTNUaXRsZS50ZXh0Q29udGVudCA9ICdQaXp6YSBGdW5naGknO1xuICAgIGNvbnN0IG1lbnUzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUzVGV4dC50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgRnVuZ2hpIGlzIGEgd29ybGQgZmFtb3VzIFBpenphLiBUaGUgUGl6emEgRnVuZ2hpIGlzIHRvcHBlZCB3aXRoIHRoZSBmaW5lc3QgYXJvbWF0aWMgbXVzaHJvb21zLCBqdWljeSBtb3p6YXJlbGxhIGFuZCBFZGFtIGNoZWVzZXMsIGFuZCBmaW5pc2hlZCB3aXRoIGEgaGVyYiBnYXJuaXNoLic7XG4gICAgbWVudTMuYXBwZW5kQ2hpbGQobWVudTNJbWcpO1xuICAgIG1lbnUzLmFwcGVuZENoaWxkKG1lbnUzVGl0bGUpO1xuICAgIG1lbnUzLmFwcGVuZENoaWxkKG1lbnUzVGV4dCk7XG5cbiAgICBjb25zdCBtZW51NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU0LmNsYXNzTGlzdC5hZGQoJ21lbnVEaXNoJyk7XG4gICAgY29uc3QgbWVudTRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51NEltZy5jbGFzc0xpc3QuYWRkKCdtZW51SW1hZ2UnKTtcbiAgICBtZW51NEltZy5zcmMgPSAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzQzMDg5ODM0OTYtNGZhYmIxYTAxNWVlP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OFVHbDZlbUVsTWpCVWRXNXVZWHhsYm53d2ZId3dmSHg4TUElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02MDAmcT02MCc7XG4gICAgbWVudTRJbWcuYWx0ID0gJ1BpenphIFNhbGFtaSc7XG4gICAgY29uc3QgbWVudTRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU0VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gICAgbWVudTRUaXRsZS50ZXh0Q29udGVudCA9ICdQaXp6YSBTYWxhbWknO1xuICAgIGNvbnN0IG1lbnU0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU0VGV4dC50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgU2FsYW1pIGlzIGFub3RoZXIgY2xhc3NpYyBhbmQgcG9wdWxhciBQaXp6YS4gSXQgaXMgc2V2ZWQgd2l0aCB0b21hdG9lcywgbW96emFyZWxsYSBhbmQgc3BpY3kgc2FsYW1pIHNsaWNlcy4nO1xuICAgIG1lbnU0LmFwcGVuZENoaWxkKG1lbnU0SW1nKTtcbiAgICBtZW51NC5hcHBlbmRDaGlsZChtZW51NFRpdGxlKTtcbiAgICBtZW51NC5hcHBlbmRDaGlsZChtZW51NFRleHQpO1xuXG4gICAgY29uc3QgbWVudTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NS5jbGFzc0xpc3QuYWRkKCdtZW51RGlzaCcpO1xuICAgIGNvbnN0IG1lbnU1SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudTVJbWcuY2xhc3NMaXN0LmFkZCgnbWVudUltYWdlJyk7XG4gICAgbWVudTVJbWcuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjQxMjQ0OTk5NTc0LTVhZmVhMjI4YmQyNj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTc0JnE9ODAnO1xuICAgIG1lbnU1SW1nLmFsdCA9ICdDYWx6b25lJztcbiAgICBjb25zdCBtZW51NVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcbiAgICBtZW51NVRpdGxlLnRleHRDb250ZW50ID0gJ0NhbHpvbmUnO1xuICAgIGNvbnN0IG1lbnU1VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU1VGV4dC50ZXh0Q29udGVudCA9ICdBIGNhbHpvbmUgaXMgYW4gSXRhbGlhbiBvdmVuLWJha2VkIHR1cm5vdmVyLCBtYWRlIHdpdGggbGVhdmVuZWQgZG91Z2guIEl0IG9yaWdpbmF0ZWQgaW4gTmFwbGVzLiBPdXIgY2Fsem9uZSBpcyBtYWRlIGZyb20gc2FsdGVkIGJyZWFkIGRvdWdoLCBiYWtlZCBpbiBhbiBvdmVuIGFuZCBpcyBzdHVmZmVkIHdpdGggc2FsYW1pLCBtb3p6YXJlbGxhLCByaWNvdHRhIGFuZCBQYXJtZXNhbiwgYXMgd2VsbCBhcyBhbiBlZ2cuJztcbiAgICBtZW51NS5hcHBlbmRDaGlsZChtZW51NUltZyk7XG4gICAgbWVudTUuYXBwZW5kQ2hpbGQobWVudTVUaXRsZSk7XG4gICAgbWVudTUuYXBwZW5kQ2hpbGQobWVudTVUZXh0KTtcblxuICAgIGNvbnN0IG1lbnU2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTYuY2xhc3NMaXN0LmFkZCgnbWVudURpc2gnKTtcbiAgICBjb25zdCBtZW51NkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnU2SW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWFnZScpO1xuICAgIG1lbnU2SW1nLnNyYyA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyMjk3MzUzNjk2OC0zZWFkOWU3ODA5NjA/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwJztcbiAgICBtZW51NkltZy5hbHQgPSAnU3BhZ2hldHRpIEJvbG9nbmVzZSc7XG4gICAgY29uc3QgbWVudTZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU2VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gICAgbWVudTZUaXRsZS50ZXh0Q29udGVudCA9ICdTcGFnaGV0dGkgQm9sb2duZXNlJztcbiAgICBjb25zdCBtZW51NlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NlRleHQudGV4dENvbnRlbnQgPSBcIlNwYWdoZXR0aSBib2xvZ25lc2UgY29uc2lzdHMgb2Ygc3BhZ2hldHRpIHdpdGggYW4gSXRhbGlhbiByYWfDuSAobWVhdCBzYXVjZSkgbWFkZSB3aXRoIG1pbmNlZCBiZWVmLCBiYWNvbiBhbmQgdG9tYXRvZXMsIHNlcnZlZCB3aXRoIFBhcm1lc2FuIGNoZWVzZS4gU3BhZ2hldHRpIGJvbG9nbmVzZSBpcyBvbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBwYXN0YSBkaXNoZXMgZWF0ZW4gb3V0c2lkZSBvZiBJdGFseSBhbmQgb2YgY291cnNlIGl0IGNhbid0IGJlIG1pc3NpbmcgaGVyZSBvbiBvdXIgbWVudS5cIjtcbiAgICBtZW51Ni5hcHBlbmRDaGlsZChtZW51NkltZyk7XG4gICAgbWVudTYuYXBwZW5kQ2hpbGQobWVudTZUaXRsZSk7XG4gICAgbWVudTYuYXBwZW5kQ2hpbGQobWVudTZUZXh0KTtcblxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnUxKTtcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51Mik7XG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudTMpO1xuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnU0KTtcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51NSk7XG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudTYpO1xuXG4gICAgY29uc3Qgc3BlY2lhbHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BlY2lhbHR5LmNsYXNzTGlzdC5hZGQoJ21lbnVIZWFkbGluZScsICdmYWRlJyk7XG4gICAgc3BlY2lhbHR5LnRleHRDb250ZW50ID0gJ091ciBob25vcmFyeSBIb3VzZSBTcGVjaWFsJztcblxuICAgIGNvbnN0IHJvbmFTcGVjaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm9uYVNwZWNpYWwuY2xhc3NMaXN0LmFkZCgncm9uYVNwZWNpYWwnLCAnZmFkZScpO1xuXG4gICAgY29uc3QgR29sZGVuQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgR29sZGVuQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ0dvbGRlbkJvcmRlcicpO1xuXG4gICAgY29uc3Qgcm9uYVNwZWNpYWxJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICByb25hU3BlY2lhbEltZy5jbGFzc0xpc3QuYWRkKCdyb25hU3BlY2lhbEltZycpO1xuICAgIHJvbmFTcGVjaWFsSW1nLnNyYyA9ICdodHRwczovL2R5bmFtaWMtbWVkaWEtY2RuLnRyaXBhZHZpc29yLmNvbS9tZWRpYS9waG90by1vLzE5L2JhL2U2LzFhL2Rpc2d1c3RpbmctZm9vZC1tdXNldW0uanBnP3c9MTIwMCZoPTEyMDAmcz0xJztcbiAgICByb25hU3BlY2lhbEltZy5hbHQgPSAnVGhlIFJvbmEgU3BlY2lhbCc7XG5cbiAgICBHb2xkZW5Cb3JkZXIuYXBwZW5kQ2hpbGQocm9uYVNwZWNpYWxJbWcpO1xuXG4gICAgY29uc3Qgcm9uYVNwZWNpYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvbmFTcGVjaWFsVGl0bGUuY2xhc3NMaXN0LmFkZCgncm9uYVNwZWNpYWxUaXRsZScpO1xuICAgIHJvbmFTcGVjaWFsVGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIGluZmFtb3VzIFJvbmEgU3BlY2lhbCc7XG5cbiAgICBjb25zdCByb25hU3BlY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb25hU3BlY2lhbFRleHQudGV4dENvbnRlbnQgPSBgVGhlIFJvbmEgU3BlY2lhbCBpcyBmb3IgYWxsIHBlb3BsZSB3aG8gd2FudCB0byBleHBlcmllbmNlIGEgZGVsaWNhdGUgaW5zaWdodCBpbnRvIGF3ZSBzcHJlYWRpbmcsIHBhbmRlbWljIGNhdXNpbmcgYW5kIHBhdGhvZ2VuaWMgZm9vZHMuIFRoZSBSb25hIFNwZWNpYWwgaXMgc2ltcGxlXG4gICAgdG8gbWFrZSBidXQgaW5jcmVkaWJseSB1bmlxdWUgYmVjYXVzZSBzb21laG93IHBlb3BsZSBkb24ndCB0cnkgdGhpcyBvdXQgYW55bW9yZS4gQmVjb21lIG9uZSBvZiB0aGUgZmV3IHdobyBhcmUgZWFnZXIgdG8gdHJ5LmBcblxuICAgIHJvbmFTcGVjaWFsLmFwcGVuZENoaWxkKEdvbGRlbkJvcmRlcik7XG4gICAgcm9uYVNwZWNpYWwuYXBwZW5kQ2hpbGQocm9uYVNwZWNpYWxUaXRsZSk7XG4gICAgcm9uYVNwZWNpYWwuYXBwZW5kQ2hpbGQocm9uYVNwZWNpYWxUZXh0KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGxpbmUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51R3JpZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwZWNpYWx0eSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvbmFTcGVjaWFsKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtZW51SGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIG1lbnVHcmlkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBzcGVjaWFsdHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHJvbmFTcGVjaWFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSwgMTAwKTtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmd1YWdlJyk7XG5cbiAgICBpZiAoc2VsZWN0TGFuZy52YWx1ZSA9PT0gXCJpdFwiKSB7XG4gICAgICAgIG1lbnVIZWFkbGluZS50ZXh0Q29udGVudCA9ICdJbCBNZW51JztcbiAgICAgICAgbWVudTFUZXh0LnRleHRDb250ZW50ID0gXCJMYSBQaXp6YSBNYXJnaGVyaXRhIMOoIHVuIGNsYXNzaWNvIGl0YWxpYW5vIHBlciBsZSBwZXJzb25lIGNoZSBub24gdm9nbGlvbm8gYXNzdW1lcmUgdGFudGUgY2Fsb3JpZS4gVmllbmUgc2Vydml0byBjb24gYmFzaWxpY28gZXh0cmEgc29wcmEgZSBvdnZpYW1lbnRlIGNvbiB0YW50byBjdW9yZSBlIHBhc3Npb25lLlwiO1xuICAgICAgICBtZW51MlRleHQudGV4dENvbnRlbnQgPSAnQ29ub3NjaXV0YSBhbmNoZSBjb21lIHNmaW5jaW9uZSwgbGEgcGl6emEgYWxsYSBzaWNpbGlhbmEgaGEgdW5hIGNyb3N0YSBzcGVzc2EgZGFsbGEgY29uc2lzdGVuemEgc29mZmljZSBlIHNvZmZpY2UuIFZpZW5lIGNvdHRvIGluIHVuYSB0ZWdsaWEgZGkgZm9ybWEgcmV0dGFuZ29sYXJlLCBjb25kaXRvIGNvbiBzYWxzYSBkaSBwb21vZG9ybywgYWNjaXVnaGUsIGNpcG9sbGUsIG9yaWdhbm8gZSBmb3JtYWdnaW8gZGkgcGVjb3JhIGEgcGFzdGEgZHVyYS4nO1xuICAgICAgICBtZW51M1RleHQudGV4dENvbnRlbnQgPSBcIkxhIFBpenphIEZ1bmdoaSDDqCB1bmEgUGl6emEgZmFtb3NhIGluIHR1dHRvIGlsIG1vbmRvLiBMYSBQaXp6YSBGdW5naGkgw6ggY29uZGl0YSBjb24gaSBtaWdsaW9yaSBmdW5naGkgYXJvbWF0aWNpLCBzdWNjb3NhIG1venphcmVsbGEgZSBmb3JtYWdnaSBFZGFtIGUgcmlmaW5pdGEgY29uIHVuIGNvbnRvcm5vIGRpIGVyYmUuXCI7XG4gICAgICAgIG1lbnU0VGV4dC50ZXh0Q29udGVudCA9IFwiTGEgUGl6emEgU2FsYW1lIMOoIHVuJ2FsdHJhIFBpenphIGNsYXNzaWNhIGUgYXBwcmV6emF0YS4gVmllbmUgc2Vydml0byBjb24gcG9tb2RvcmluaSwgbW96emFyZWxsYSBlIGZldHRlIGRpIHNhbGFtZSBwaWNjYW50ZS5cIjtcbiAgICAgICAgbWVudTVUZXh0LnRleHRDb250ZW50ID0gJ1VuIGNhbHpvbmUgw6ggdW4gZmF0dHVyYXRvIGl0YWxpYW5vIGFsIGZvcm5vLCBmYXR0byBjb24gcGFzdGEgbGlldml0YXRhLiBIYSBhdnV0byBvcmlnaW5lIGEgTmFwb2xpLiBJbCBub3N0cm8gY2Fsem9uZSDDqCBmYXR0byBjb24gcGFzdGEgZGkgcGFuZSBzYWxhdGEsIGNvdHRhIGFsIGZvcm5vIGVkIMOoIGZhcmNpdG8gY29uIHNhbGFtZSwgbW96emFyZWxsYSwgcmljb3R0YSBlIHBhcm1pZ2lhbm8sIG9sdHJlIGFkIHVuIHVvdm8uJztcbiAgICAgICAgbWVudTZUZXh0LnRleHRDb250ZW50ID0gXCJHbGkgc3BhZ2hldHRpIGFsbGEgYm9sb2duZXNlIHNvbm8gY29zdGl0dWl0aSBkYSBzcGFnaGV0dGkgY29uIHJhZ8O5IGl0YWxpYW5vIChzdWdvIGRpIGNhcm5lKSBhIGJhc2UgZGkgY2FybmUgbWFjaW5hdGEsIHBhbmNldHRhIGUgcG9tb2RvcmksIHNlcnZpdGkgY29uIHBhcm1pZ2lhbm8uIEdsaSBzcGFnaGV0dGkgYWxsYSBib2xvZ25lc2Ugc29ubyB1bm8gZGVpIHByaW1pIHBpYXR0aSBwacO5IGFwcHJlenphdGkgZnVvcmkgZGFsbCdJdGFsaWEgZSBvdnZpYW1lbnRlIG5vbiBwb3Nzb25vIG1hbmNhcmUgcXVpIG5lbCBub3N0cm8gbWVudS5cIjtcbiAgICAgICAgc3BlY2lhbHR5LnRleHRDb250ZW50ID0gJ0lsIG5vc3RybyBTcGVjaWFsZSBvbm9yYXJpbyBkZWxsYSBDYXNhJztcbiAgICAgICAgcm9uYVNwZWNpYWxUaXRsZS50ZXh0Q29udGVudCA9ICdJbCBmYW1pZ2VyYXRvIFJvbmEgU3BlY2lhbGUnO1xuICAgICAgICByb25hU3BlY2lhbFRleHQudGV4dENvbnRlbnQgPSBgTG8gU3BlY2lhbGUgUm9uYSDDqCBwZXIgdHV0dGUgbGUgcGVyc29uZSBjaGUgdm9nbGlvbm8gc3BlcmltZW50YXJlIHVuYSB2aXNpb25lIGRlbGljYXRhIGRlbGxhIGRpZmZ1c2lvbmUgZGVsbG8gc3R1cG9yZSwgZGVnbGkgYWxpbWVudGkgY2hlIGNhdXNhbm8gcGFuZGVtaWUgZSBwYXRvZ2VuaS4gTG8gU3BlY2lhbGUgUm9uYSDDqCBzZW1wbGljZVxuICAgIGRhIHJlbmRlcmUgbWEgaW5jcmVkaWJpbG1lbnRlIHVuaWNvIHBlcmNow6kgaW4gcXVhbGNoZSBtb2RvIGxlIHBlcnNvbmUgbm9uIGxvIHByb3Zhbm8gcGnDuS4gRGl2ZW50YSB1bm8gZGVpIHBvY2hpIGRlc2lkZXJvc2kgZGkgcHJvdmFyZS5cbiAgICAgICAgYFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWVudUhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1RoZSBNZW51JztcbiAgICAgICAgbWVudTFUZXh0LnRleHRDb250ZW50ID0gXCJUaGUgUGl6emEgTWFyZ2hlcml0YSBpcyBhbiBJdGFsaWFuIGNsYXNzaWMgZm9yIHBlb3BsZSB3aG8gZG9uJ3Qgd2FudCB0byBnYWluIGFzIG11Y2ggY2Fsb3JpZXMuIEl0IGlzIHNlcnZlZCB3aXRoIGV4dHJhIGJhc2lsIG9uIHRvcCBhbmQgb2YgY291cnNlIHdpdGggYSBsb3Qgb2YgaGVhcnQgYW5kIHBhc3Npb24uXCI7XG4gICAgICAgIG1lbnUyVGV4dC50ZXh0Q29udGVudCA9ICdBbHNvIGtub3duIGFzIHNmaW5jaW9uZSwgU2ljaWxpYW4tc3R5bGUgcGl6emEgaGFzIGEgdGhpY2sgY3J1c3Qgd2l0aCBhIGZsdWZmeSwgc3BvbmdlLWxpa2UgY29uc2lzdGVuY3kuIEl0IGlzIGJha2VkIGluIGEgcmVjdGFuZ3VsYXIgc2hhcGVkIHBhbiwgdG9wcGVkIHdpdGggdG9tYXRvIHNhdWNlLCBhbmNob3ZpZXMsIG9uaW9ucywgb3JlZ2FubywgYW5kIGEgaGFyZCBzaGVlcOKAmXMgbWlsayBjaGVlc2UuJztcbiAgICAgICAgbWVudTNUZXh0LnRleHRDb250ZW50ID0gJ1RoZSBQaXp6YSBGdW5naGkgaXMgYSB3b3JsZCBmYW1vdXMgUGl6emEuIFRoZSBQaXp6YSBGdW5naGkgaXMgdG9wcGVkIHdpdGggdGhlIGZpbmVzdCBhcm9tYXRpYyBtdXNocm9vbXMsIGp1aWN5IG1venphcmVsbGEgYW5kIEVkYW0gY2hlZXNlcywgYW5kIGZpbmlzaGVkIHdpdGggYSBoZXJiIGdhcm5pc2guJztcbiAgICAgICAgbWVudTRUZXh0LnRleHRDb250ZW50ID0gJ1RoZSBQaXp6YSBTYWxhbWkgaXMgYW5vdGhlciBjbGFzc2ljIGFuZCBwb3B1bGFyIFBpenphLiBJdCBpcyBzZXZlZCB3aXRoIHRvbWF0b2VzLCBtb3p6YXJlbGxhIGFuZCBzcGljeSBzYWxhbWkgc2xpY2VzLic7XG4gICAgICAgIG1lbnU1VGV4dC50ZXh0Q29udGVudCA9ICdBIGNhbHpvbmUgaXMgYW4gSXRhbGlhbiBvdmVuLWJha2VkIHR1cm5vdmVyLCBtYWRlIHdpdGggbGVhdmVuZWQgZG91Z2guIEl0IG9yaWdpbmF0ZWQgaW4gTmFwbGVzLiBPdXIgY2Fsem9uZSBpcyBtYWRlIGZyb20gc2FsdGVkIGJyZWFkIGRvdWdoLCBiYWtlZCBpbiBhbiBvdmVuIGFuZCBpcyBzdHVmZmVkIHdpdGggc2FsYW1pLCBtb3p6YXJlbGxhLCByaWNvdHRhIGFuZCBQYXJtZXNhbiwgYXMgd2VsbCBhcyBhbiBlZ2cuJztcbiAgICAgICAgbWVudTZUZXh0LnRleHRDb250ZW50ID0gXCJTcGFnaGV0dGkgYm9sb2duZXNlIGNvbnNpc3RzIG9mIHNwYWdoZXR0aSB3aXRoIGFuIEl0YWxpYW4gcmFnw7kgKG1lYXQgc2F1Y2UpIG1hZGUgd2l0aCBtaW5jZWQgYmVlZiwgYmFjb24gYW5kIHRvbWF0b2VzLCBzZXJ2ZWQgd2l0aCBQYXJtZXNhbiBjaGVlc2UuIFNwYWdoZXR0aSBib2xvZ25lc2UgaXMgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgcGFzdGEgZGlzaGVzIGVhdGVuIG91dHNpZGUgb2YgSXRhbHkgYW5kIG9mIGNvdXJzZSBpdCBjYW4ndCBiZSBtaXNzaW5nIGhlcmUgb24gb3VyIG1lbnUuXCI7XG4gICAgICAgIHNwZWNpYWx0eS50ZXh0Q29udGVudCA9ICdPdXIgaG9ub3JhcnkgSG91c2UgU3BlY2lhbCc7XG4gICAgICAgIHJvbmFTcGVjaWFsVGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIGluZmFtb3VzIFJvbmEgU3BlY2lhbCc7XG4gICAgICAgIHJvbmFTcGVjaWFsVGV4dC50ZXh0Q29udGVudCA9IGBUaGUgUm9uYSBTcGVjaWFsIGlzIGZvciBhbGwgcGVvcGxlIHdobyB3YW50IHRvIGV4cGVyaWVuY2UgYSBkZWxpY2F0ZSBpbnNpZ2h0IGludG8gYXdlIHNwcmVhZGluZywgcGFuZGVtaWMgY2F1c2luZyBhbmQgcGF0aG9nZW5pYyBmb29kcy4gVGhlIFJvbmEgU3BlY2lhbCBpcyBzaW1wbGVcbiAgICB0byBtYWtlIGJ1dCBpbmNyZWRpYmx5IHVuaXF1ZSBiZWNhdXNlIHNvbWVob3cgcGVvcGxlIGRvbid0IHRyeSB0aGlzIG91dCBhbnltb3JlLiBCZWNvbWUgb25lIG9mIHRoZSBmZXcgd2hvIGFyZSBlYWdlciB0byB0cnkuYFxuICAgIH1cblxuICAgIHNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0TGFuZy52YWx1ZSA9PT0gXCJpdFwiKSB7XG4gICAgICAgICAgICBtZW51SGVhZGxpbmUudGV4dENvbnRlbnQgPSAnSWwgTWVudSc7XG4gICAgICAgICAgICBtZW51MVRleHQudGV4dENvbnRlbnQgPSBcIkxhIFBpenphIE1hcmdoZXJpdGEgw6ggdW4gY2xhc3NpY28gaXRhbGlhbm8gcGVyIGxlIHBlcnNvbmUgY2hlIG5vbiB2b2dsaW9ubyBhc3N1bWVyZSB0YW50ZSBjYWxvcmllLiBWaWVuZSBzZXJ2aXRvIGNvbiBiYXNpbGljbyBleHRyYSBzb3ByYSBlIG92dmlhbWVudGUgY29uIHRhbnRvIGN1b3JlIGUgcGFzc2lvbmUuXCI7XG4gICAgICAgICAgICBtZW51MlRleHQudGV4dENvbnRlbnQgPSAnQ29ub3NjaXV0YSBhbmNoZSBjb21lIHNmaW5jaW9uZSwgbGEgcGl6emEgYWxsYSBzaWNpbGlhbmEgaGEgdW5hIGNyb3N0YSBzcGVzc2EgZGFsbGEgY29uc2lzdGVuemEgc29mZmljZSBlIHNvZmZpY2UuIFZpZW5lIGNvdHRvIGluIHVuYSB0ZWdsaWEgZGkgZm9ybWEgcmV0dGFuZ29sYXJlLCBjb25kaXRvIGNvbiBzYWxzYSBkaSBwb21vZG9ybywgYWNjaXVnaGUsIGNpcG9sbGUsIG9yaWdhbm8gZSBmb3JtYWdnaW8gZGkgcGVjb3JhIGEgcGFzdGEgZHVyYS4nO1xuICAgICAgICAgICAgbWVudTNUZXh0LnRleHRDb250ZW50ID0gXCJMYSBQaXp6YSBGdW5naGkgw6ggdW5hIFBpenphIGZhbW9zYSBpbiB0dXR0byBpbCBtb25kby4gTGEgUGl6emEgRnVuZ2hpIMOoIGNvbmRpdGEgY29uIGkgbWlnbGlvcmkgZnVuZ2hpIGFyb21hdGljaSwgc3VjY29zYSBtb3p6YXJlbGxhIGUgZm9ybWFnZ2kgRWRhbSBlIHJpZmluaXRhIGNvbiB1biBjb250b3JubyBkaSBlcmJlLlwiO1xuICAgICAgICAgICAgbWVudTRUZXh0LnRleHRDb250ZW50ID0gXCJMYSBQaXp6YSBTYWxhbWUgw6ggdW4nYWx0cmEgUGl6emEgY2xhc3NpY2EgZSBhcHByZXp6YXRhLiBWaWVuZSBzZXJ2aXRvIGNvbiBwb21vZG9yaW5pLCBtb3p6YXJlbGxhIGUgZmV0dGUgZGkgc2FsYW1lIHBpY2NhbnRlLlwiO1xuICAgICAgICAgICAgbWVudTVUZXh0LnRleHRDb250ZW50ID0gJ1VuIGNhbHpvbmUgw6ggdW4gZmF0dHVyYXRvIGl0YWxpYW5vIGFsIGZvcm5vLCBmYXR0byBjb24gcGFzdGEgbGlldml0YXRhLiBIYSBhdnV0byBvcmlnaW5lIGEgTmFwb2xpLiBJbCBub3N0cm8gY2Fsem9uZSDDqCBmYXR0byBjb24gcGFzdGEgZGkgcGFuZSBzYWxhdGEsIGNvdHRhIGFsIGZvcm5vIGVkIMOoIGZhcmNpdG8gY29uIHNhbGFtZSwgbW96emFyZWxsYSwgcmljb3R0YSBlIHBhcm1pZ2lhbm8sIG9sdHJlIGFkIHVuIHVvdm8uJztcbiAgICAgICAgICAgIG1lbnU2VGV4dC50ZXh0Q29udGVudCA9IFwiR2xpIHNwYWdoZXR0aSBhbGxhIGJvbG9nbmVzZSBzb25vIGNvc3RpdHVpdGkgZGEgc3BhZ2hldHRpIGNvbiByYWfDuSBpdGFsaWFubyAoc3VnbyBkaSBjYXJuZSkgYSBiYXNlIGRpIGNhcm5lIG1hY2luYXRhLCBwYW5jZXR0YSBlIHBvbW9kb3JpLCBzZXJ2aXRpIGNvbiBwYXJtaWdpYW5vLiBHbGkgc3BhZ2hldHRpIGFsbGEgYm9sb2duZXNlIHNvbm8gdW5vIGRlaSBwcmltaSBwaWF0dGkgcGnDuSBhcHByZXp6YXRpIGZ1b3JpIGRhbGwnSXRhbGlhIGUgb3Z2aWFtZW50ZSBub24gcG9zc29ubyBtYW5jYXJlIHF1aSBuZWwgbm9zdHJvIG1lbnUuXCI7XG4gICAgICAgICAgICBzcGVjaWFsdHkudGV4dENvbnRlbnQgPSAnSWwgbm9zdHJvIFNwZWNpYWxlIG9ub3JhcmlvIGRlbGxhIENhc2EnO1xuICAgICAgICAgICAgcm9uYVNwZWNpYWxUaXRsZS50ZXh0Q29udGVudCA9ICdJbCBmYW1pZ2VyYXRvIFJvbmEgU3BlY2lhbGUnO1xuICAgICAgICAgICAgcm9uYVNwZWNpYWxUZXh0LnRleHRDb250ZW50ID0gYExvIFNwZWNpYWxlIFJvbmEgw6ggcGVyIHR1dHRlIGxlIHBlcnNvbmUgY2hlIHZvZ2xpb25vIHNwZXJpbWVudGFyZSB1bmEgdmlzaW9uZSBkZWxpY2F0YSBkZWxsYSBkaWZmdXNpb25lIGRlbGxvIHN0dXBvcmUsIGRlZ2xpIGFsaW1lbnRpIGNoZSBjYXVzYW5vIHBhbmRlbWllIGUgcGF0b2dlbmkuIExvIFNwZWNpYWxlIFJvbmEgw6ggc2VtcGxpY2VcbiAgICAgICAgZGEgcmVuZGVyZSBtYSBpbmNyZWRpYmlsbWVudGUgdW5pY28gcGVyY2jDqSBpbiBxdWFsY2hlIG1vZG8gbGUgcGVyc29uZSBub24gbG8gcHJvdmFubyBwacO5LiBEaXZlbnRhIHVubyBkZWkgcG9jaGkgZGVzaWRlcm9zaSBkaSBwcm92YXJlLlxuICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVudUhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1RoZSBNZW51JztcbiAgICAgICAgICAgIG1lbnUxVGV4dC50ZXh0Q29udGVudCA9IFwiVGhlIFBpenphIE1hcmdoZXJpdGEgaXMgYW4gSXRhbGlhbiBjbGFzc2ljIGZvciBwZW9wbGUgd2hvIGRvbid0IHdhbnQgdG8gZ2FpbiBhcyBtdWNoIGNhbG9yaWVzLiBJdCBpcyBzZXJ2ZWQgd2l0aCBleHRyYSBiYXNpbCBvbiB0b3AgYW5kIG9mIGNvdXJzZSB3aXRoIGEgbG90IG9mIGhlYXJ0IGFuZCBwYXNzaW9uLlwiO1xuICAgICAgICAgICAgbWVudTJUZXh0LnRleHRDb250ZW50ID0gJ0Fsc28ga25vd24gYXMgc2ZpbmNpb25lLCBTaWNpbGlhbi1zdHlsZSBwaXp6YSBoYXMgYSB0aGljayBjcnVzdCB3aXRoIGEgZmx1ZmZ5LCBzcG9uZ2UtbGlrZSBjb25zaXN0ZW5jeS4gSXQgaXMgYmFrZWQgaW4gYSByZWN0YW5ndWxhciBzaGFwZWQgcGFuLCB0b3BwZWQgd2l0aCB0b21hdG8gc2F1Y2UsIGFuY2hvdmllcywgb25pb25zLCBvcmVnYW5vLCBhbmQgYSBoYXJkIHNoZWVw4oCZcyBtaWxrIGNoZWVzZS4nO1xuICAgICAgICAgICAgbWVudTNUZXh0LnRleHRDb250ZW50ID0gJ1RoZSBQaXp6YSBGdW5naGkgaXMgYSB3b3JsZCBmYW1vdXMgUGl6emEuIFRoZSBQaXp6YSBGdW5naGkgaXMgdG9wcGVkIHdpdGggdGhlIGZpbmVzdCBhcm9tYXRpYyBtdXNocm9vbXMsIGp1aWN5IG1venphcmVsbGEgYW5kIEVkYW0gY2hlZXNlcywgYW5kIGZpbmlzaGVkIHdpdGggYSBoZXJiIGdhcm5pc2guJztcbiAgICAgICAgICAgIG1lbnU0VGV4dC50ZXh0Q29udGVudCA9ICdUaGUgUGl6emEgU2FsYW1pIGlzIGFub3RoZXIgY2xhc3NpYyBhbmQgcG9wdWxhciBQaXp6YS4gSXQgaXMgc2V2ZWQgd2l0aCB0b21hdG9lcywgbW96emFyZWxsYSBhbmQgc3BpY3kgc2FsYW1pIHNsaWNlcy4nO1xuICAgICAgICAgICAgbWVudTVUZXh0LnRleHRDb250ZW50ID0gJ0EgY2Fsem9uZSBpcyBhbiBJdGFsaWFuIG92ZW4tYmFrZWQgdHVybm92ZXIsIG1hZGUgd2l0aCBsZWF2ZW5lZCBkb3VnaC4gSXQgb3JpZ2luYXRlZCBpbiBOYXBsZXMuIE91ciBjYWx6b25lIGlzIG1hZGUgZnJvbSBzYWx0ZWQgYnJlYWQgZG91Z2gsIGJha2VkIGluIGFuIG92ZW4gYW5kIGlzIHN0dWZmZWQgd2l0aCBzYWxhbWksIG1venphcmVsbGEsIHJpY290dGEgYW5kIFBhcm1lc2FuLCBhcyB3ZWxsIGFzIGFuIGVnZy4nO1xuICAgICAgICAgICAgbWVudTZUZXh0LnRleHRDb250ZW50ID0gXCJTcGFnaGV0dGkgYm9sb2duZXNlIGNvbnNpc3RzIG9mIHNwYWdoZXR0aSB3aXRoIGFuIEl0YWxpYW4gcmFnw7kgKG1lYXQgc2F1Y2UpIG1hZGUgd2l0aCBtaW5jZWQgYmVlZiwgYmFjb24gYW5kIHRvbWF0b2VzLCBzZXJ2ZWQgd2l0aCBQYXJtZXNhbiBjaGVlc2UuIFNwYWdoZXR0aSBib2xvZ25lc2UgaXMgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgcGFzdGEgZGlzaGVzIGVhdGVuIG91dHNpZGUgb2YgSXRhbHkgYW5kIG9mIGNvdXJzZSBpdCBjYW4ndCBiZSBtaXNzaW5nIGhlcmUgb24gb3VyIG1lbnUuXCI7XG4gICAgICAgICAgICBzcGVjaWFsdHkudGV4dENvbnRlbnQgPSAnT3VyIGhvbm9yYXJ5IEhvdXNlIFNwZWNpYWwnO1xuICAgICAgICAgICAgcm9uYVNwZWNpYWxUaXRsZS50ZXh0Q29udGVudCA9ICdUaGUgaW5mYW1vdXMgUm9uYSBTcGVjaWFsJztcbiAgICAgICAgICAgIHJvbmFTcGVjaWFsVGV4dC50ZXh0Q29udGVudCA9IGBUaGUgUm9uYSBTcGVjaWFsIGlzIGZvciBhbGwgcGVvcGxlIHdobyB3YW50IHRvIGV4cGVyaWVuY2UgYSBkZWxpY2F0ZSBpbnNpZ2h0IGludG8gYXdlIHNwcmVhZGluZywgcGFuZGVtaWMgY2F1c2luZyBhbmQgcGF0aG9nZW5pYyBmb29kcy4gVGhlIFJvbmEgU3BlY2lhbCBpcyBzaW1wbGVcbiAgICAgICAgdG8gbWFrZSBidXQgaW5jcmVkaWJseSB1bmlxdWUgYmVjYXVzZSBzb21laG93IHBlb3BsZSBkb24ndCB0cnkgdGhpcyBvdXQgYW55bW9yZS4gQmVjb21lIG9uZSBvZiB0aGUgZmV3IHdobyBhcmUgZWFnZXIgdG8gdHJ5LmBcbiAgICAgICAgfVxuICAgIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==