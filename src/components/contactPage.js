import React, {useState} from 'react';
import Header from './header';
import Contact from './contact';
import Sidebar from './sidebar'; 

 const ContactPage = () => {
 	return (
 		<div>
	 		<Header />
	 		<Contact />
	 		<Sidebar />
	 	</div>
 	)	
 }

 export default ContactPage;