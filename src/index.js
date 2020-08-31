import {clearModel, model} from './model';
import {Site} from "./classes/Site";
import {Sidebar} from "./classes/Sidebar";

import './styles/main.css';

const site = new Site("#site");

const updateBlock = (newBlock) => {
	clearModel[0].isCreated ? clearModel[1].push(newBlock) : model.push(newBlock);
	site.render(clearModel[0].isCreated ? clearModel[1] : model);
}

const removeDefaultModel = () => {
	clearModel[0].isCreated ? clearModel[1] = [] : '';
	clearModel[0].isCreated = !clearModel[0].isCreated;
	site.render(clearModel[0].isCreated ? clearModel[1] : model);
}

new Sidebar("#panel", updateBlock, removeDefaultModel);

site.render(model);
