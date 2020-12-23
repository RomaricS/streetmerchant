import {Store} from './store';

export const Cultura: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '#addCartButton',
				text: ['Ajouter au panier']
			}
		],
		outOfStock: [
			{
                container: '.note-msg',
                text: ['Aucun produit ne correspond à la sélection']
			}
		],
		maxPrice: {
			container: '.prices'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.cultura.com/sony-official-large-gaming-headset-ps4-3499550371093.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.cultura.com/playstation-5-edition-standard-0711719395201.html'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.cultura.com/playstation-5-edition-digitale-version-sans-lecteur-optique-0711719395300.html'
		}
	],
	name: 'cultura'
};
