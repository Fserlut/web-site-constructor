import {TitleBlock, TextBlock} from './Blocks';

export class Sidebar {
	constructor(selector, update, remove) {
		this.$el = document.querySelector(selector);
		this.update = update;
		this.remove = remove;
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
			createNewModel('Очистить сайт'),
		].join('');
	}

	addBlock(event){
		event.preventDefault();
		if (event.target.name.toUpperCase() == 'Очистить сайт'.toUpperCase()){
			this.remove([]);
		} else {
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
  `);
}

function createNewModel(type) {
	return (`
	<form name="${type}">
		<h5>${type}</h5>
		<button type="submit" class="btn btn-primary btn-sm">Очистить сайт</button>
	</form>
	<hr />
  `);
}

