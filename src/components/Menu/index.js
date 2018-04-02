import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import menus from 'config/menus';

const MenuLink = ({isLabel, isPath, isExact}) =>{
	return (
		<Route 
			path = {isPath}
			exact = {isExact}
			children = {({match})=>{
				var isActive = match ? "active" : "";
				return (
					<li className={isActive}>
						<Link to={isPath} >{isLabel}</Link>
					</li>
				);
			}}
		/>
	);
}
class Menu extends Component {
  	render() {
		return (
			<ul className="menu">
				{ this.showMenus(menus) }
			</ul>
		);
	}
	showMenus = (menus) =>{
		var result = null;
		if(menus.length > 0){
			result = menus.map((menu,index)=>{
				return (
					<MenuLink 
						key = {index}
						isLabel = {menu.name}
						isPath = {menu.path}
						isExact = {menu.exact}
					/>
				);
			});
		}
		return result;
	}
}
export default Menu;