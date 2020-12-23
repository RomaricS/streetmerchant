import {Store} from './store';

export const Micromania: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '.add-to-cart-container',
				text: ['Ajouter au panier']
			},
			{
				container: '.icon-basket-full',
				text: ['Ajouter au panier']
			},
			{
				container: '.btn-get-in-store-inventory',
				text: ['Retrait 1h en magasin']
			}
		],
		outOfStock: [
			{
				container: '.back-in-stock-container',
				text: ['Le produit est épuisé.']
			}
		],
		maxPrice: {
			container: '.variation-radio'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.micromania.fr/manette-sans-fil-xbox-one-54977.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.micromania.fr/playstation-5-105642.html'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.micromania.fr/playstation-5-alldigital-106097.html'
		}
	],
	name: 'micromania'
};
