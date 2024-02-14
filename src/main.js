let date = new Date();
document.getElementById("year").innerHTML = date.getFullYear().toString();

const initApp = () => {
    const burgerButton = document.getElementById('burger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    burgerButton.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);