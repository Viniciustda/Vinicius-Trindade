// Função para exibir a seção selecionada
function showSection(sectionId) {
    // Ocultar todas as seções
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    // Exibir a seção clicada
    document.getElementById(sectionId).classList.add('active');

    // Fechar o menu vertical ao selecionar uma seção
    var verticalMenu = document.getElementById("vertical-menu");
    verticalMenu.style.display = "none";
}

// Função para minimizar o cabeçalho e o menu ao rolar a página
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var header = document.getElementById("header");
    var navbar = document.getElementById("navbar");
    var menuIcon = document.getElementById("menu-icon");

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0"; // Reexibe o cabeçalho
        navbar.style.top = "150px"; // Reexibe o menu
        menuIcon.classList.remove("active"); // Oculta o ícone do menu
    } else {
        header.style.top = "-200px"; // Oculta completamente o cabeçalho com pouca rolagem
        navbar.style.top = "-100px"; // Oculta o menu
        menuIcon.classList.add("active"); // Exibe o ícone do menu
    }
    prevScrollpos = currentScrollPos;
}

// Função para alternar o menu em dispositivos móveis
function toggleMenu() {
    var verticalMenu = document.getElementById("vertical-menu");
    if (verticalMenu.style.display === "flex") {
        verticalMenu.style.display = "none";
    } else {
        verticalMenu.style.display = "flex";
    }
}

// Função para alternar a descrição das conquistas
function toggleDescription(element) {
    var description = element.nextElementSibling;
    if (description.classList.contains('show')) {
        description.classList.remove('show');
        description.classList.add('hide');
    } else if (description.classList.contains('hide')) {
        description.classList.remove('hide');
    } else {
        description.classList.add('show');
    }
}