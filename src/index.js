import './style.css';
import { loadHome } from './DOMloader.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const interactWithDOM = (() => {
    function showTabMenu() {
        document.addEventListener('DOMContentLoaded', () => {
                const option1 = document.querySelector('.option.home');
                const modal = document.querySelector('.modal');
                option1.addEventListener('click', () => {
                    modal.classList.toggle('active');
                    loadHome();
                });
                const option2 = document.querySelector('.option.menu');
                const option3 = document.querySelector('.option.contact');
                option2.addEventListener('click', () => {
                    modal.classList.toggle('active');
                    loadMenu();
                });
                option3.addEventListener('click', () => {
                    modal.classList.toggle('active');
                    loadContact();
                });
        });
    }

    return { showTabMenu };
})();

interactWithDOM.showTabMenu();