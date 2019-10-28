import React from 'react';
import defaultphoto from '.././img/user_temp.svg';

const Createcontact  = () => {
	return (
		<section className="main_content">
		<div className="contact_photo">
			<div className="contact_photo_img">
				<div to="#" title="contact photo"><img src={defaultphoto} alt="contact photo_"></img></div>
				<p>Click for <br></br> Upload Photo</p>
			</div>
		</div>
		<div className="contact_form">
			<form className="add_form" action="" method="POST">
				<div><input name="contact_name" type="text" placeholder="Name"></input></div>
				<div><input name="contact_surname" type="text" placeholder="Surname"></input></div>
				<div><input name="contact_phone" type="text" placeholder="Phone"></input></div>
				<div><input name="contact_email" type="text" placeholder="Email"></input></div>
				<div><input name="contact_bday" type="text" placeholder="Birthday"></input></div>
				<div><input name="contact_insta" type="text" placeholder="Instagram"></input></div>
				<div><input name="contact_facebook" type="text" placeholder="Facebook"></input></div>
				<div><textarea name="contact_info" id="" cols="30" rows="10" placeholder="Information"></textarea></div>
				<div><button><span>Save</span></button></div>
			</form>
		</div>
	</section>
	)
}

export default Createcontact;