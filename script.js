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

const ouvrirPanier = document.getElementById("ouvrir-panier");
const fermerPanier = document.getElementById("fermer-panier");

const fondPanier = document.getElementById("fond-panier");
const listePanier = document.getElementById("liste-panier");

const nombreArticles = document.getElementById("nombre-articles");
const totalQuantite = document.getElementById("total-quantite");
const montantTotal = document.getElementById("montant-total");

function formaterPrix(prix) {
    return prix.toLocaleString("fr-FR") + " CFA";
}

// Preferer la boucle for(image of images) {} pour ce traitement
function afficherImages() {
    galerie.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        /* Le prof demande de preferer cette methode car l'autre est fastidieuse
        let htmlCard = `
            <article class="carte">
                <button onclick="modifierQuantite(${image.id}, "ajouter")">+</button>
            </article>
        `;
        */

        const carte = document.createElement("article");
        carte.classList.add("carte"); // Utiliser carte.className = "carte"; ainsi que pour les autres

        const photo = document.createElement("img");
        photo.src = image.url;
        photo.alt = image.nom;

        const titre = document.createElement("h3");
        titre.textContent = image.nom;

        const prix = document.createElement("p");
        prix.classList.add("prix");
        prix.textContent = formaterPrix(image.prix);

        const commandes = document.createElement("div");
        commandes.classList.add("commandes"); // Permet de creer un conteneur regroupant les boutons + et - de chaque commande

        // Bouton d'ajout d'elements
        const boutonPlus = document.createElement("button");
        boutonPlus.textContent = "+";
        boutonPlus.addEventListener("click", function() {
            modifierQuantite(image.id, "ajouter");
        });

        const quantite = document.createElement("span");
        quantite.classList.add("quantite");
        quantite.textContent = image.quantite;

        // Bouton de retrtait d'elements
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
    for (let i = 0; i < images.length; i++) {
        if (images[i].id === id) {
            if (action === "ajouter") {
                images[i].quantite++;
            } else if (action === "retirer" && images[i].quantite > 0) {
                images[i].quantite--;
            }
            break;
        }
    }
    afficherImages();
    actualiserPanier();
}

function actualiserPanier() {
    let quantiteTotale = 0;
    let prixTotal = 0;

    for (let i = 0; i < images.length; i++) {
        quantiteTotale += images[i].quantite;

        prixTotal += images[i].prix * images[i].quantite;
    }

    nombreArticles.textContent = quantiteTotale;
    totalQuantite.textContent = quantiteTotale;
    montantTotal.textContent = formaterPrix(prixTotal);

    afficherContenuPanier();
}


function afficherContenuPanier() {
    listePanier.innerHTML = "";

    let panierVide = true;

    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        if (image.quantite > 0) {
            panierVide = false;

            const article = document.createElement("div");
            article.classList.add("article-panier");

            const photo = document.createElement("img");
            photo.src = image.url;
            photo.alt = image.nom;

            const informations = document.createElement("div");
            informations.classList.add("infos-article");

            const titre = document.createElement("h3");
            titre.textContent = image.nom;

            const prix = document.createElement("p");
            prix.textContent = "Prix unitaire : " + formaterPrix(image.prix);

            const quantite = document.createElement("p");
            quantite.textContent = "Quantité : " + image.quantite;

            const sousTotal = document.createElement("p");

            sousTotal.textContent = "Sous-total : " + formaterPrix(image.prix * image.quantite);

            const commandes = document.createElement("div");
            commandes.classList.add("commandes");

            const boutonPlus = document.createElement("button");
            boutonPlus.textContent = "+";
            boutonPlus.addEventListener("click", function() {
                modifierQuantite(image.id, "ajouter");
            });

            const boutonMoins = document.createElement("button");
            boutonMoins.textContent = "-";
            boutonMoins.addEventListener("click", function() {
                modifierQuantite(image.id, "retirer");
            });

            commandes.appendChild(boutonPlus);
            commandes.appendChild(boutonMoins);

            informations.appendChild(titre);
            informations.appendChild(prix);
            informations.appendChild(quantite);
            informations.appendChild(sousTotal);

            article.appendChild(photo);
            article.appendChild(informations);
            article.appendChild(commandes);

            listePanier.appendChild(article);
        }
    }

    if (panierVide) {
        const message = document.createElement("p");

        message.classList.add("panier-vide");
        message.textContent = "Votre panier est vide.";
        listePanier.appendChild(message);
    }
}

ouvrirPanier.addEventListener("click", function() {
    fondPanier.classList.add("actif");
});

fermerPanier.addEventListener("click", function() {
    fondPanier.classList.remove("actif");
});

fondPanier.addEventListener("click", function(event) {
    if (event.target === fondPanier) {
        fondPanier.classList.remove("actif");
    }
}); // Pour fermer le panier lorsqu'on clique ailleurs.

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fondPanier.classList.remove("actif");
    }
}); // Pour fermer le panier lorsqu'on presse sur esc.

afficherImages();
actualiserPanier();