import React  from 'react';

const Header =  () => {
	const openMenuHandler  = ( ) =>{

		return document.querySelector('.sidebar').classList.toggle('opened');
	}
 return (
 		<div className="header">
		<a className = "header_menu" onClick = {openMenuHandler}>
			<i className="icon ion-md-menu"></i>
		</a>
		<h1>All contacts</h1>
		<a href = "/">
			<i className="icon ion-md-close"></i>
		</a>
		<a>
			<i className="icon ion-ios-more"></i>
		</a>
    </div>
 	)
}

export default Header;