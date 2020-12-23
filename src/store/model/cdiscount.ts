import {Store} from './store';

export const Cdiscount: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '.jsFpPurchasePriceBloc',
				text: ['Ajouter au panier']
			},
			{
				container: '.btAdd',
				text: ['Ajouter au panier']
			}
		],
		outOfStock: [
			{
                container: '.lpCarTop',
                text: ['']
			}
		],
		maxPrice: {
			container: '.fpPriceBloc'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.cdiscount.com/jeux-pc-video-console/ps5/console-ps5-sony-ps5/f-1035001-son3665540797413.html#mpos=0|mp'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.cdiscount.com/jeux-pc-video-console/ps5/console-ps5/l-1035001.html'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.cdiscount.com/jeux-pc-video-console/ps5/console-ps5/l-1035001.html'
		}
	],
	name: 'cdiscount'
};
