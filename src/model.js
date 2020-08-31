import {css} from './utils'
import {TextBlock, TitleBlock} from "./classes/Blocks";

export let model = [
	new TitleBlock('Конструктор сайтов', {
		tag: 'h2',
		styles: css({
			'text-align' : 'center',
			background: 'lightblue',
			color: '#000',
			'padding-top': '20px',
		}),
	}),
	new TextBlock('Пока можно добавить только тексты и заголовоки :(', {
		styles: css({
			'text-align': 'center',
			'padding-top': '20px',
		}),
	}),
	new TitleBlock('<a href="https://github.com/Fserlut/web-site-constructor" target="_blank">Source</a>', {
		tag: 'h2',
		styles: css({
			'text-align' : 'center',
			color: '#000',
		}),
	}),
]

export const clearModel = [
	{
		isCreated: false,
	},
	[

	]
];