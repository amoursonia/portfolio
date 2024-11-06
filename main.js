window.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.getElementById("menu");
    const CmdMenu = document.getElementById("CmdMenu");

    // Fonction pour basculer l'affichage du menu
    CmdMenu.addEventListener('click', function () {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });

    // Fonction pour ajuster l'affichage du menu
    function adjustMenuDisplay() {
        const ww = window.innerWidth;
        if (ww > 768) {
            menu.style.display = 'flex';
            CmdMenu.style.display = 'none';
        } else {
            menu.style.display = 'none';
            CmdMenu.style.display = 'block'; // Affiche le burger
        }
    }

    // Appeler la fonction au chargement et au redimensionnement
    adjustMenuDisplay();
    window.onresize = adjustMenuDisplay;
});