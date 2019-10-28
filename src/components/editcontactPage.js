import React, {useState} from 'react';
import Header from './header';
import Editcontact from './editcontact';
import Sidebar from './sidebar'; 

 const EditcontactPage = () => {
 	return (
 		<div>
	 		<Header />
	 		<Editcontact />
	 		<Sidebar />
	 	</div>
 	)	
 }

 export default EditcontactPage;