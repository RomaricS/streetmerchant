import {Link, Store} from './store/model';
import chalk from 'chalk';
import {config} from './config';
import winston from 'winston';

const prettyJson = winston.format.printf((info) => {
	const timestamp = new Date().toLocaleTimeString();

	let out = `${chalk.grey(`[${timestamp}]`)} ${info.level} ${chalk.grey(
		'::'
	)} ${info.message}`;

	if (Object.keys(info.metadata).length > 0) {
		out = `${out} ${chalk.magenta(JSON.stringify(info.metadata, null, 2))}`;
	}

	return out;
});

export const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.metadata({
			fillExcept: ['level', 'message', 'timestamp']
		}),
		prettyJson
	),
	level: config.logLevel,
	transports: [new winston.transports.Console({})]
});

export const Print = {
	backoff(
		link: Link,
		store: Store,
		parameters: {delay: number; statusCode: number},
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow(
					`BACKOFF DELAY status=${parameters.statusCode} delay=${parameters.delay}`
				)
			);
		}

		return `✖ ${buildProductString(link, store)} :: BACKOFF DELAY status=${
			parameters.statusCode
		} delay=${parameters.delay}`;
	},
	badStatusCode(
		link: Link,
		store: Store,
		statusCode: number,
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow(`Erreur :> ${statusCode}`)
			);
		}

		return `✖ ${buildProductString(
			link,
			store
		)} :: STATUS CODE ERROR ${statusCode}`;
	},
	bannedSeller(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('BANNED SELLER')
			);
		}

		return `✖ ${buildProductString(link, store)} :: BANNED SELLER`;
	},
	captcha(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('CAPTCHA')
			);
		}

		return `✖ ${buildProductString(link, store)} :: CAPTCHA`;
	},
	cloudflare(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('CLOUDFLARE, WAITING')
			);
		}

		return `✖ ${buildProductString(link, store)} :: CLOUDFLARE, WAITING`;
	},
	inStock(link: Link, store: Store, color?: boolean, sms?: boolean): string {
		const productString = `${buildProductString(link, store)} :: IN STOCK`;

		if (color) {
			return chalk.bgGreen.white.bold(`🚀🚨 ${productString} 🚨🚀`);
		}

		if (sms) {
			return productString;
		}

		return `🚀🚨 ${productString} 🚨🚀`;
	},
	inStockWaiting(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'ℹ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('En stock, Vite')
			);
		}

		return `ℹ ${buildProductString(link, store)} :: En stock, Vite`;
	},
	maxPrice(
		link: Link,
		store: Store,
		maxPrice: number,
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow(
					`PRICE ${link.price ?? ''} EXCEEDS LIMIT ${maxPrice}`
				)
			);
		}

		return `✖ ${buildProductString(link, store)} :: PRICE ${
			link.price ?? ''
		} EXCEEDS LIMIT ${maxPrice}`;
	},
	message(
		message: string,
		topic: string,
		store: Store,
		color?: boolean
	): string {
		if (color) {
			return (
				'✖ ' +
				buildSetupString(topic, store, true) +
				' :: ' +
				chalk.yellow(message)
			);
		}

		return `✖ ${buildSetupString(topic, store)} :: ${message}`;
	},
	noResponse(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('NO RESPONSE')
			);
		}

		return `✖ ${buildProductString(link, store)} :: NO RESPONSE`;
	},
	outOfStock(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.red('Produit Indisponible')
			);
		}

		return `✖ ${buildProductString(link, store)} :: Produit Indisponible`;
	},
	productInStock(link: Link): string {
		let productString = `Product Page: ${link.url}`;
		if (link.cartUrl)
			productString += `\nAdd To Cart Link: ${link.cartUrl}`;

		return productString;
	},
	rateLimit(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return (
				'✖ ' +
				buildProductString(link, store, true) +
				' :: ' +
				chalk.yellow('RATE LIMIT EXCEEDED')
			);
		}

		return `✖ ${buildProductString(link, store)} :: RATE LIMIT EXCEEDED`;
	}
};

function buildSetupString(
	topic: string,
	store: Store,
	color?: boolean
): string {
	if (color) {
		return (
			chalk.cyan(`[${store.name}]`) + chalk.grey(` [setup (${topic})]`)
		);
	}

	return `[${store.name}] [setup (${topic})]`;
}

function buildProductString(link: Link, store: Store, color?: boolean): string {
	if (color) {
		return (
			chalk.cyan(`[${store.name.toUpperCase()}]`) +
			chalk.grey(` => ${link.model}`)
			// chalk.grey(` [${link.brand} (${link.series})] ${link.model}`)
		);
	}

	return `[${store.name}] [${link.brand} (${link.series})] ${link.model}`;
}
