import {Store} from './store';
// TODO A faire
export const Rdc: Store = {
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
			{
				container: '.ProductBuyBox',
				text: ['En stock en ligne']
			}
		],
		outOfStock: [
			{
                container: '.img-responsive',
                text: ['']
			},
			{
				container: '.ProductBuyBox',
				text: ['Indisponible']
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
				'https://www.micromania.fr/manette-sans-fil-xbox-one-54977.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.culture.leclerc/jeux-video-u/playstation-5-u/playstation-5-play-has-no-limit-b'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.culture.leclerc/jeux-video-u/playstation-5-u/consoles-u/console-playstation-5---edition-digitale-ps5-0711719395300-pr'
		}
	],
	name: 'rdc'
};
