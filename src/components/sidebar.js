import React, {useState} from 'react';
import Bitmap from '.././img/Bitmap.png'; 

const Sidebar = () => {
	const closeMenuHandler  = ( ) =>{

		return document.querySelector('.sidebar').classList.toggle('opened');
	}

	return (
		<div className="sidebar">
		<div className="wrapper">
			<div className="header-sidebar">
				<div className="close"><a onClick = {closeMenuHandler}></a></div>
				<h1 className="title">Contact Book</h1>
			</div>
			<div className="user-card">
				<div className="user-avatar">
					<img src={Bitmap} alt=""></img>

				</div>
				<div className="user-name">
					<h2 className="name"><a href = "/contact">Warhol Andy</a></h2>
					<p className="log-out">Log out</p>
				</div>
				<div className="action-menu">
					<button className="action"><span className="action-dots"></span></button>
				</div>
			</div>
			<div className="search">
				<input type="text" placeholder="Search a contact"></input>
				<img className="search-img" src="img/search.svg" alt=""></img>
			</div>
		</div>
			<main>
				<div className="categories">
					<h3 className="categories-title">Categories</h3>
					<ul className="categories-list">
						<li className="categories-item active">All contacts</li>
						<li className="categories-item">Family</li>
						<li className="categories-item">Job</li>
						<li className="categories-item">Fitnes</li>
					</ul>
				</div>
				<div className="birthday">
					<h3 className="birthday-title">Upcoming Birthday</h3>
					<ul className="birthday-list">
						<li className="birthday-item">
							<p className="name">Александр Иванов</p>
							<p className="date">20.09.2019</p>
							<span className="age">30 years</span>
						</li>
						<li className="birthday-item">
							<p className="name">Вячеслав Константинов</p>
							<p className="date">23.09.2019</p>
							<span className="age">44 years</span>
						</li>
					</ul>
				</div>
			</main>
			<div className="wrapper">
				<div className="footer">
					
					<button><a href="/createcontact"><div className="add"></div>Add contact</a></button>
				</div>
			</div>
	</div>

	)
}

export default Sidebar;