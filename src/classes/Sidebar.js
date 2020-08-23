import {TitleBlock, TextBlock} from '../classes/Blocks';

export class Sidebar {
	constructor(selector, update) {
		this.$el = document.querySelector(selector);
		this.update = update;
		this.init()
	}

	init(){
		this.$el.addEventListener('submit', this.addBlock.bind(this));
		this.$el.innerHTML = this.template;
	}

	get template(){
		return [
			block('Заголовок'),
			block('Строка с текстом'),
		].join('');
	}

	addBlock(event){
		event.preventDefault();

		let type = event.target.name;
		let value = event.target.value.value;
		let styles = event.target.styles.value;

		const Constructor = type === 'text' ? TextBlock : TitleBlock;

		event.target.value.value = '';
		event.target.styles.value = '';

		const newBlock = new Constructor(value, {styles});
		this.update(newBlock);
	}
}

function block(type) {
	return (`
	<form name="${type}">
		<h5>${type}</h5>
		<div class="form-group">
			<input class="form-control form-control-sm" name="value" placeholder="value">
		</div>
		<div class="form-group">
			<input class="form-control form-control-sm" name="styles" placeholder="styles">
		</div>
		<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
	</form>
	<hr />
  `)
}
