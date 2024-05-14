// Función para generar la sección hero dinámicamente
function generateHeroSection() {
    const mainContent = document.getElementById('mainContent');

    const section = document.createElement('section');
    section.classList.add('hero');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const priceParagraph = document.createElement('p');
    priceParagraph.classList.add('price');
    priceParagraph.style.backgroundColor = 'red';
    priceParagraph.style.width = '150px';
    priceParagraph.style.margin = '0px, 25px, 0px , 25px'; // Para centrar el párrafo
    priceParagraph.textContent = '$8,450';

    const heading = document.createElement('h1');
    heading.textContent = 'Venice, Italy';

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.style.color = 'black';
    descriptionParagraph.style.marginLeft = '25px';
    priceParagraph.style.margin = '25px 0px 0px 120px';
    descriptionParagraph.style.textAlign = 'center';
    descriptionParagraph.innerHTML = 'Travel is free responsive template by templatemo. All images used in this template are from <a href="./index.html">Unsplash</a>';

    const button = document.createElement('button');
    button.textContent = 'PRE-BOOKING';

    heroContent.appendChild(priceParagraph);
    heroContent.appendChild(heading);
    heroContent.appendChild(descriptionParagraph);
    heroContent.appendChild(button);

    section.appendChild(heroContent);

    mainContent.appendChild(section);
}

// Llamar a la función para generar la sección hero
generateHeroSection();

// Función para generar los enlaces de navegación
function generateNavLinks() {
    const navLinksContainer = document.getElementById('navLinks');
    const links = ['HOME', 'SERVICES', 'EVENTS', 'ABOUT US', 'CONTACT'];
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = './index.html';
        a.textContent = link;
        li.appendChild(a);
        navLinksContainer.appendChild(li);
    });
}

// Función para generar las secciones de destino
function generateDestinations() {
    const mainContent = document.getElementById('mainContent');
    const destinations = [
        { country: 'ITALY', image: '../RECURSOS/Italia.jpg', description1: 'Rome, Milan, Naples', description2: 'SILVER HOTEL, 4 NIGHTS, 5 STARS', price: '$1,800 BOOK NOW' },
        { country: 'FRANCE', image: '../RECURSOS/Francia.jpg', description1: 'Paris, Marseille, Lyon', description2: 'NEW PALACE, 5 NIGHTS, 5 STARS', price: '$2,300 BOOK NOW' },
        { country: 'GERMANY', image: '../RECURSOS/Alemania.jpg', description1: 'Berlin, Hamburg, Munich', description2: 'LUXE HOTEL, 5 NIGHTS, 5 STARS', price: '$3,100 BOOK NOW' },
        { country: 'SPAIN', image: '../RECURSOS/españa.jpg', description1: 'Madrid, Barcelona, Valencia', description2: 'GHOOD HOTEL, 4 NIGHTS, 6 STARS', price: '$4,800 BOOK NOW' }
        // Agregar aquí los demás destinos en un formato similar
    ];
    destinations.forEach(destination => {
        const section = document.createElement('section');
        section.classList.add('destination');

        const destinationInfo = document.createElement('div');
        destinationInfo.classList.add('destination-info');

        const h3 = document.createElement('h3');
        h3.textContent = destination.country;

        const img = document.createElement('img');
        img.src = destination.image;
        img.alt = destination.country;

        destinationInfo.appendChild(h3);
        destinationInfo.appendChild(img);
        section.appendChild(destinationInfo);

        const p1 = document.createElement('p');
        p1.classList.add('description-P1');
        p1.textContent = destination.description1;

        const p2 = document.createElement('p');
        p2.classList.add('description-P2');
        p2.textContent = destination.description2;

        const button = document.createElement('button');
        button.classList.add('reserva');
        button.textContent = destination.price;

        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(button);

        mainContent.appendChild(section);
    });
}

// Función para generar las imágenes de la sección flex-container
function generateFlexContainerImages() {
    const flexContainer = document.querySelector('.flex-container');
    const images = ['../RECURSOS/01.png', '../RECURSOS/02.png', '../RECURSOS/03.png', '../RECURSOS/01.png', '../RECURSOS/02.png', '../RECURSOS/03.png'];
    images.forEach(imageSrc => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = '';
        img.classList.add('image');
        div.appendChild(img);
        flexContainer.appendChild(div);
    });
}


// Llamar a las funciones para generar los enlaces de navegación, las secciones de destino y las imágenes de la sección flex-container
generateNavLinks();
generateDestinations();
generateFlexContainerImages();
