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
        content.appendChild(container);
        content.appendChild(impressum);
        content.appendChild(credit);

        selectLang.addEventListener('change', () => {
            if (selectLang.value === "it") {
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

export function loadHome() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
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
}
