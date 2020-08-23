import {col, row} from "../utils";

class Block {
	constructor(type, value, options) {
		this.value = value;
		this.type = type;
		this.options = options;
	}

	toHTML(){
		throw new Error('Метот toHTML был вызван у родительского класса!');
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super('title', value, options);
	}

	toHTML(){
		const {styles, tag = 'h2'} = this.options;
		return (row(col(`<${tag}>${this.value}</${tag}>`), styles));
	}
}

export class ImageBlock extends Block{
	constructor(value, options) {
		super('image', value, options);
	}

	toHTML(){
		const {alt, imageStyles, styles} = this.options;
		let html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}" />`
		return (row(col(html), styles));
	}
}

export class TextBlock extends Block{
	constructor(value, options) {
		super('text', value, options);
	}

	toHTML(){
		const {styles} = this.options;
		return (row(col(`<p>${this.value}</p>`), styles));
	}
}

export class TextColumnsBlock extends Block{
	constructor(value, options) {
		super('textColumns', value, options);
	}

	toHTML(){
		const {styles} = this.options;
		let newHtml = this.value.map(el => (col(`<p>${el}</p>`))).join('');
		return (row(`${newHtml}`, styles));
	}
}
