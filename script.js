class ImageCard {
    constructor(id, titre, prix, url) {
        this.id = id;
        this.titre = titre;
        this.prix = prix;
        this.url = url;
        this.quantite = 0;
    }

    render() {
        return `
            <article class="carte">
                <img src="${this.url}" alt="${this.titre}">
                <h3>${this.titre}</h3>
                <p class="prix">${this.prix.toLocaleString("fr-FR")} CFA</p>

                <div class="commandes">
                    <button data-action="ajouter" data-id="${this.id}">+</button>
                    <span class="quantite">${this.quantite}</span>
                    <button data-action="retirer" data-id="${this.id}">-</button>
                </div>
            </article>
        `;
    }
}

class ImageCardList {
    constructor(imageCards) {
        this.imageCards = imageCards;
    }

    render() {
        const galerie = document.getElementById("galerie");
        let html = "";

        for (const carte of this.imageCards) {
            html += carte.render();
        }

        galerie.innerHTML = html;
    }

    modifierQuantite(id, action) {
        for (const image of this.imageCards) {
            if (image.id === id) {
                if (action === "ajouter") {
                    image.quantite++;
                } else if (action === "retirer" && image.quantite > 0) {
                    image.quantite--;
                }
                break;
            }
        }

        this.render();
        this.actualiserCompteur();
    }

    actualiserCompteur() {
        let quantiteTotale = 0;

        for (const image of this.imageCards) {
            quantiteTotale += image.quantite;
        }

        document.getElementById("nombre-articles").textContent = quantiteTotale;
    }
}

class AfroPixel {
    constructor(imageCards) {
        this.galerie = new ImageCardList(imageCards);
        this.conteneurGalerie = document.getElementById("galerie");
    }

    initialiser() {
        this.galerie.render();
        this.galerie.actualiserCompteur();
        this.gererEvenements();
    }

    gererEvenements() {
        // Boutons + et - de la galerie
        this.conteneurGalerie.addEventListener("click", (event) => {
            this.gererModificationQuantite(event);
        });
    }

    gererModificationQuantite(event) {
        const bouton = event.target.closest("button");

        if (bouton && bouton.dataset.action) {
            const action = bouton.dataset.action;
            const id = Number(bouton.dataset.id);

            this.galerie.modifierQuantite(id, action);
        }
    }
}

// Liste des images
const images = [
    new ImageCard(1, "Femme noire", 25000, "images/blackness.jpg"),
    new ImageCard(2, "Girls in Tech", 18000, "images/deux.jpg"),
    new ImageCard(3, "Femme musulmane", 27500, "images/muslima.jpg"),
    new ImageCard(4, "Jigeen ci Tech", 20000, "images/trois.jpg"),
    new ImageCard(5, "Les gadgets high tech", 19500, "images/un.jpeg"),
    new ImageCard(6, "Centre de controle", 12500, "images/wallpaper-1.jfif"),
    new ImageCard(17, "Dark Army", 17000, "images/wallpaper-2.jpeg"),
    new ImageCard(20, "Champions d'Afrique", 22000, "images/wallpaper-3.jpg"),
    new ImageCard(21, "Bureau Mac OS", 12000, "images/wallpaper-4.png"),
    new ImageCard(22, "Bureau Mac OS bleu", 12000, "images/wallpaper-5.jpg"),
    new ImageCard(23, "Logo Ubuntu", 12000, "images/wallpaper-6.jpg"),
    new ImageCard(24, "Cyber Task Force", 12000, "images/wallpaper-7.jpg"),
    new ImageCard(25, "Regard profond", 17500, "images/wallpaper-8.jpg"),
    new ImageCard(26, "Administrateur", 12000, "images/wallpaper-9.jpg"),
    new ImageCard(7, "Cybercriminalité", 12000, "images/wallpaper-10.jfif")
];

// Lancement de l'application
const application = new AfroPixel(images);
application.initialiser();