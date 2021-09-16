/*Componentes HTML a serem inseridos na tela */
class Components {

    randomHash = () => {
        return (Math.random() + 1).toString(36).substring(7) + (Math.random() + 1).toString(36).substring(7);
    }

    //id usado na busca livre e categoria na busca por grupos.
    icon = (id,category) => {

        const iconSize = Math.round(screen.width * 0.026);
        const gradientId = 'grad_' + this.randomHash();
        const svgId = id;

        return L.divIcon(
            {
                className: '',
                iconSize: [Math.max(iconSize, 25), Math.max(iconSize, 41)],
                html: `<svg id="${svgId}" ${category} height="100" width="100" viewBox="0 0 20 20">
                        <defs>
                            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:rgb(255,0,0)" />
                            <stop offset="100%" style="stop-color:rgb(255, 100, 100)" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#${gradientId})"  stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path>
                        <circle stroke="#000" cx="10" cy="6.8" r="2.3"></circle>
                        </svg>`
            });
    }

    //Tempolate do conteúdo que é exibido no popup.
    popup = (name, description, address) => {
        return `
        <div>
            <h3 class="uk-card-title">${name}</h3>
            <p>${description}</p>
            <p><strong>Endereço: </strong>${address}</p>
        </div>
        `;
    }
}