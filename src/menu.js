export function loadMenu() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1507048947301-7afc2aca0edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.overflowX = 'hidden';

    const menuHeadline = document.createElement('div');
    menuHeadline.classList.add('menuHeadline');
    menuHeadline.textContent = 'The Menu';

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menuGrid');

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
    specialty.classList.add('menuHeadline');
    specialty.textContent = 'Our honorary House Special';

    const ronaSpecial = document.createElement('div');
    ronaSpecial.classList.add('ronaSpecial');

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
}