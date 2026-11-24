export class ImageCardList {
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