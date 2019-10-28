import React, {useState} from 'react';
import Header from './header';
import Createcontact from './createcontact';
import Sidebar from './sidebar'; 

 const CreatecontactPage = () => {
 	return (
 		<div>
 			<Sidebar />
	 		<Header />
	 		<Createcontact />
	 	</div>
 	)	
 }

 export default CreatecontactPage;