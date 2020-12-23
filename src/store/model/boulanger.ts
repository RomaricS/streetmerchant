import {Store} from './store';

export const Boulanger: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '.onlinePurchase',
				text: ['Ajouter au panier']
			},
			{
				container: '.storeChoice',
				text: ['Choisir mon magasin']
            },
			{
				container: '.x-addToStore',
				text: ['Choisir mon magasin']
            },
            {
				container: '.purchaseBlockAvailability',
				text: ['chez vous']
			},
            {
				container: '.deliveryDatesModal',
				text: ['Détails']
			}
		],
		outOfStock: [
			{
				container: '.purchaseBlockAvailability',
				text: ['Indisponible']
			},
			{
				container: '.purchaseBlockDetails',
				text: ['Indisponible']
			}
		],
		maxPrice: {
			container: '.fix-price'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.boulanger.com/ref/1147568'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.boulanger.com/ref/1147567'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.boulanger.com/ref/1147568'
		}
	],
	name: 'boulanger'
};
