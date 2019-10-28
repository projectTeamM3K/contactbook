import React, {useState} from 'react';
import Header from './header';
import Main from './main';
import Sidebar from './sidebar'; 

 const MainPage = () => {
 	return (
 		<div>
	 		<Header />
	 		<Main />
	 		<Sidebar />
	 	</div>
 	)	
 }

 export default MainPage;