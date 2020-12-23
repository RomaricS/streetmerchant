import {Store} from './store';

export const Fnac: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '.ff-button-label',
				text: ['Ajouter au panier']
			},
			{
				container: '.f-buyBox-buttons',
				text: ['Ajouter au panier']
			},
			{
				container: '.f-buyBox-buttons',
				text: ['Retrait 1H en magasin']
			},
			{
				container: '.f-buyBox-availabilityStatus-available',
				text: ['En stock']
			}
		],
		outOfStock: [
			{
				container: '.f-buyBox-availabilityStatus-unavailable',
				text: ['Indisponible']
			},
			{
				container: '.f-buyBox-availability f-buyBox-availabilityStatus-unavailable',
				text: ['']
			}
		],
		maxPrice: {
			container: '.f-priceBox'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://jeux-video.fnac.com/Manette-sans-fil-Sony-DualSense-pour-PS5-Blanc/a14119958/w-4#omnsearchpos=3'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.fnac.com/Console-Sony-PS5-Edition-Standard/a14119956/w-4#omnsearchpos=1'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.fnac.com/Console-Sony-PS5-Edition-Digital/a14119961/w-4#omnsearchpos=2'
		}
	],
	name: 'fnac'
};
