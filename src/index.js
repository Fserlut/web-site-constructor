import {model} from './model';
import {Site} from "./classes/Site";
import {Sidebar} from "./classes/Sidebar";

import './styles/main.css';

const site = new Site("#site");

const updateBlock = (newBlock) => {
	model.push(newBlock);
	site.render(model);
}

new Sidebar("#panel", updateBlock);

site.render(model);
