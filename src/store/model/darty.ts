import {Store} from './store';

export const Darty: Store = {
	currency: '€',
	labels: {
		captcha: {
			container: 'body',
			text: ['entrez les caractères que vous voyez ci-dessous']
		},
		inStock: [
			{
				container: '.btn-add-basket',
				text: ['Ajouter au panier']
			},
			{
				container: '.btn-add-basket-cc',
				text: ['Retirer en magasin']
			}
		],
		outOfStock: [
			{
                container: '.product-information-bloc',
                text: ['Produit indisponible']
			},
			{
				container: '.product_overlay_unavailable',
				text: ['Indisponible']
			}
		],
		maxPrice: {
			container: '.product-sale-price'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.darty.com/nav/achat/petit_electromenager/beaute_masculine/tondeuse_homme/philips_qp6505_21.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.darty.com/nav/achat/informatique/ps4/consoles_ps4/sony_sony_ps5_standard.html'
		},
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.darty.com/nav/achat/informatique/ps4/consoles_ps4/sony_sony_ps5_digitale.html'
		}
	],
	name: 'leclerc'
};
