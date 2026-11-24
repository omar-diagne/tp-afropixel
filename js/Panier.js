export class Panier {
    constructor(imageCards) {
        this.imageCards = imageCards;

        this.fond = document.getElementById("fond-panier");
        this.liste = document.getElementById("liste-panier");
        this.nombreArticles = document.getElementById("nombre-articles");
        this.totalQuantite = document.getElementById("total-quantite");
        this.montantTotal = document.getElementById("montant-total");
    }

    ouvrir() {
        this.fond.classList.add("actif");
    }

    fermer() {
        this.fond.classList.remove("actif");
    }

    actualiser() {
        let quantiteTotale = 0;
        let prixTotal = 0;

        for (const image of this.imageCards) {
            quantiteTotale += image.quantite;
            prixTotal += image.prix * image.quantite;
        }

        this.nombreArticles.textContent = quantiteTotale;
        this.totalQuantite.textContent = quantiteTotale;
        this.montantTotal.textContent = prixTotal.toLocaleString("fr-FR") + " CFA";

        this.afficherContenu();
    }

    afficherContenu() {
        let html = "";

        for (const image of this.imageCards) {
            if (image.quantite > 0) {
                html += `
                    <div class="article-panier">
                        <img src="${image.url}" alt="${image.titre}">

                        <div class="infos-article">
                            <h3>${image.titre}</h3>
                            <p>Prix unitaire : ${image.prix.toLocaleString("fr-FR")} CFA</p>
                            <p>Quantité : ${image.quantite}</p>
                            <p>Sous-total : ${(image.prix * image.quantite).toLocaleString("fr-FR")} CFA</p>
                        </div>

                        <div class="commandes">
                            <button data-action="ajouter" data-id="${image.id}">+</button>
                            <button data-action="retirer" data-id="${image.id}">-</button>
                        </div>
                    </div>
                `;
            }
        }

        if (html === "") {
            html = `<p class="panier-vide">Votre panier est vide.</p>`;
        }

        this.liste.innerHTML = html;
    }
}