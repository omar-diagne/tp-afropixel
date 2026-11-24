import { ImageCardList } from "./ImageCardList.js";

export class AfroPixel {
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