import {Store} from './store';

export const Superu: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '#add_to_cart_session',
				text: ['Ajouter au panier']
			},
		],
		outOfStock: [
			{
                container: '.bibi',
                text: ['Nous n\'avons plus de consoles en stock']
			}
		],
		maxPrice: {
			container: '.priceBlock-init-g'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://reservation.coursesu.com/'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://reservation.coursesu.com/'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://reservation.coursesu.com/'
		}
	],
	name: 'superu'
};
