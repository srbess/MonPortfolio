function afficherDetails(projet) {
    var popup = document.getElementById('popup');
    var popupTitle = document.getElementById('popup-title');
    var popupText = document.getElementById('popup-text');
    var popupImage = document.getElementById('popup-image');

    switch (projet) {
        case 'scrabble':
            popupTitle.textContent = "Projet Data";
            popupText.textContent = "Développement d’une pipeline complet de data scraping, nettoyage et analyse de données à partir d’un site e-commerce. Extraction des informations via BeautifulSoup, transformation avec Pandas, stockage en MySQL et visualisation des tendances avec Matplotlib.";
            
            break;
        case 'gestionP':
            popupTitle.textContent = "Projet Web";
            popupText.textContent ="Conception et développement d’un site web permettant la gestion d’équipes et l’assignation de tâches. Le projet intègre une interface interactive et une base de données MySQL pour organiser les projets et suivre leur avancement en temps réel."
            
            break;
         case 'e-commerce':
            popupTitle.textContent = "Projet e-commerce";
            popupText.textContent ="FootShop est un site de vente de maillots de football développé en HTML, CSS, JavaScript, PHP et MySQL. Il propose une navigation fluide, une gestion des stocks et des commandes, ainsi qu'un back-office pour les administrateurs."
            
            break;
    }

    popup.style.display = "block";
}

function fermerPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = "none";
}

function changerImage(idImage) {
    var image = document.getElementById(idImage);
    switch (idImage) {
        case 'assistante':
            image.src = "assistante_hover.png";
            break;
        case 'AS':
            image.src = "AS_hover.png";
            break;
        case 'Prof':
            image.src = "prof_hover.png";
            break;
        // Ajoutez des cas pour d'autres images si nécessaire
        default:
            break;
    }
}

function restaurerImage() {
    var imageAssistante = document.getElementById('assistante');
    var imageAS = document.getElementById('AS');
    var imageProf = document.getElementById('Prof');
    
    imageAssistante.src = "assistante.png";
    imageAS.src = "AS.png";
    imageProf.src = "prof.png";
}
