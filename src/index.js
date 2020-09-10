import {elements,switchView} from './views/base';
import * as listView from './views/listView';
import List from './model/List'
const state={};

const controlList=async(target)=>{
	listView.toggleActive(target);
	switchView('list');
	try{
		state.list=new List(target.id);
		await state.list.getList();
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
