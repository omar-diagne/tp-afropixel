export class ImageCard {
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