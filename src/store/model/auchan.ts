import {Store} from './store';

export const Auchan: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '.product-addToCart--cta',
				text: ['Ajouter au panier']
			},
			{
				container: '.qtySelector__container',
				text: ['Quantité']
			}
		],
		outOfStock: [
			{
                container: '.error-container--title',
                text: ['Envolée']
			},
			{
				container: '.error-container--ref',
				text: ['Erreur 404']
			}
		],
		maxPrice: {
			container: '.product-price--formattedValue'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.auchan.fr/sony-manette-sans-fil-dualsense-ps5/p-c1316004'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.auchan.fr/sony-console-ps5-edition-standard/p-c1315865'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.auchan.fr/sony-console-ps5-edition-digitale/p-c1315866'
		}
	],
	name: 'auchan'
};
