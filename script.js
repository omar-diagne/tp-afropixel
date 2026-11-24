const images = [
    {
        id: 1,
        nom: "Femme noire",
        prix: 25000,
        categorie: "art",
        url: "images/blackness.jpg",
        quantite: 0
    },
    {
        id: 2,
        nom: "Girls in Tech",
        prix: 18000,
        categorie: "technologie",
        url: "images/deux.jpg",
        quantite: 0
    },
    {
        id: 3,
        nom: "Femme musulmane",
        prix: 27500,
        categorie: "religion",
        url: "images/muslima.jpg",
        quantite: 0
    },
    {
        id: 4,
        nom: "Jigeen ci Tech",
        prix: 20000,
        categorie: "technologie",
        url: "images/trois.jpg",
        quantite: 0
    },
    {
        id: 5,
        nom: "Les gadgets high tech",
        prix: 19500,
        categorie: "technologie",
        url: "images/un.jpeg",
        quantite: 0
    },
    {
        id: 6,
        nom: "Centre de controle",
        prix: 12500,
        categorie: "papier peint",
        url: "images/wallpaper-1.jfif",
        quantite: 0
    },
    {
        id: 17,
        nom: "Dark Army",
        prix: 17000,
        categorie: "papier peint",
        url: "images/wallpaper-2.jpeg",
        quantite: 0
    },
    {
        id: 20,
        nom: "Champions d'Afrique",
        prix: 22000,
        categorie: "papier peint",
        url: "images/wallpaper-3.jpg",
        quantite: 0
    },
    {
        id: 21,
        nom: "Bureau Mac OS",
        prix: 12000,
        categorie: "papier peint",
        url: "images/wallpaper-4.png",
        quantite: 0
    },
    {
        id: 22,
        nom: "Bureau Mac OS bleu",
        prix: 12000,
        categorie: "papier peint",
        url: "images/wallpaper-5.jpg",
        quantite: 0
    },
    {
        id: 23,
        nom: "Logo Ubuntu",
        prix: 12000,
        categorie: "papier peint",
        url: "images/wallpaper-6.jpg",
        quantite: 0
    },
    {
        id: 24,
        nom: "Cyber Task Force",
        prix: 12000,
        categorie: "papier peint",
        url: "images/wallpaper-7.jpg",
        quantite: 0
    },
    {
        id: 25,
        nom: "Regard profond",
        prix: 17500,
        categorie: "papier peint",
        url: "images/wallpaper-8.jpg",
        quantite: 0
    },
    {
        id: 26,
        nom: "Administrateur",
        prix: 12000,
        categorie: "papier peint",
        url: "images/wallpaper-9.jpg",
        quantite: 0
    },
    {
        id: 7,
        nom: "Cybercriminalité",
        prix: 12000,
        categorie: "papier peint",
        url: "images/wallpaper-10.jfif",
        quantite: 0
    }
];

const galerie = document.getElementById("galerie");
const nombreArticles = document.getElementById("nombre-articles");

function formaterPrix(prix) {
    return prix.toLocaleString("fr-FR") + " CFA";
}

function afficherImages() {
    galerie.innerHTML = "";

    for (const image of images) {
        const carte = document.createElement("article");
        carte.className = "carte";

        const photo = document.createElement("img");
        photo.src = image.url;
        photo.alt = image.nom;

        const titre = document.createElement("h3");
        titre.textContent = image.nom;

        const prix = document.createElement("p");
        prix.className = "prix";
        prix.textContent = formaterPrix(image.prix);

        // Conteneur regroupant les boutons + et - de chaque carte
        const commandes = document.createElement("div");
        commandes.className = "commandes";

        const boutonPlus = document.createElement("button");
        boutonPlus.textContent = "+";
        boutonPlus.addEventListener("click", function() {
            modifierQuantite(image.id, "ajouter");
        });

        const quantite = document.createElement("span");
        quantite.className = "quantite";
        quantite.textContent = image.quantite;

        const boutonMoins = document.createElement("button");
        boutonMoins.textContent = "-";
        boutonMoins.addEventListener("click", function() {
            modifierQuantite(image.id, "retirer");
        });

        commandes.appendChild(boutonPlus);
        commandes.appendChild(quantite);
        commandes.appendChild(boutonMoins);

        carte.appendChild(photo);
        carte.appendChild(titre);
        carte.appendChild(prix);
        carte.appendChild(commandes);

        galerie.appendChild(carte);
    }
}

function modifierQuantite(id, action) {
    for (const image of images) {
        if (image.id === id) {
            if (action === "ajouter") {
                image.quantite++;
            } else if (action === "retirer" && image.quantite > 0) {
                image.quantite--;
            }
            break;
        }
    }
    afficherImages();
    actualiserCompteur();
}

function actualiserCompteur() {
    let quantiteTotale = 0;

    for (const image of images) {
        quantiteTotale += image.quantite;
    }

    nombreArticles.textContent = quantiteTotale;
}

afficherImages();
actualiserCompteur();