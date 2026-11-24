import { ImageCardList } from "./ImageCardList.js";
import { Panier } from "./Panier.js";

export class AfroPixel {
    constructor(imageCards) {
        this.galerie = new ImageCardList(imageCards);
        this.panier = new Panier(imageCards);

        this.boutonOuvrir = document.getElementById("ouvrir-panier");
        this.boutonFermer = document.getElementById("fermer-panier");

        this.conteneurGalerie = document.getElementById("galerie");
        this.conteneurPanier = document.getElementById("liste-panier");
    }

    initialiser() {
        this.galerie.render();
        this.panier.actualiser();
        this.gererEvenements();
    }

    gererEvenements() {
        // Boutons + et - de la galerie
        this.conteneurGalerie.addEventListener("click", (event) => {
            this.gererModificationQuantite(event);
        });

        // Boutons + et - du panier
        this.conteneurPanier.addEventListener("click", (event) => {
            this.gererModificationQuantite(event);
        });

        // Ouvrir le panier
        this.boutonOuvrir.addEventListener("click", () => {
            this.panier.ouvrir();
        });

        // Fermer le panier
        this.boutonFermer.addEventListener("click", () => {
            this.panier.fermer();
        });

        // Fermer en cliquant sur le fond
        this.panier.fond.addEventListener("click", (event) => {
            if (event.target === this.panier.fond) {
                this.panier.fermer();
            }
        });

        // Fermer avec la touche Échap
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.panier.fermer();
            }
        });
    }

    gererModificationQuantite(event) {
        const bouton = event.target.closest("button");

        if (bouton && bouton.dataset.action) {
            const action = bouton.dataset.action;
            const id = Number(bouton.dataset.id);

            this.galerie.modifierQuantite(id, action);
            this.panier.actualiser();
        }
    }
}