//Object references
function listenForClick() {
    function displayMenu() {
        const menu = document.getElementById('main-menu');
        menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden': 'visible';
    }
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', displayMenu);
}

listenForClick();