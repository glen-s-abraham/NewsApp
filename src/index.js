import {elements,switchView} from './views/base';
import * as listView from './views/listView';
import List from './model/List'
const state={};

const controlList=async(target)=>{
	listView.toggleActive(target);
	switchView('list');
	try{
		state.list=new List(target.id);
		elements.container.innerHTML="";
		elements.container.innerHTML="<h1>Loading....</h1>";
		await state.list.getList();
		elements.container.innerHTML="";
		listView.listData(state.list.result);

	}catch(error)
	{
		alert(error);
	}
	
	

	
	
};

elements.navBar.addEventListener('click',e=>{
	const target=e.target.closest('.navbar__link');
	controlList(target)
});

window.addEventListener('load', e => {
  	console.log(elements.activeNavOnload);
  	controlList(elements.activeNavOnload);
});