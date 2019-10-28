import React, {useState} from 'react';
import defaultphoto from '.././img/user_temp.svg';
import Header from './header';

const Editcontact  = () => {
	const [state, setState]  = useState({
      user:{
      	name: 'Andy',
      	surname: 'Warhol',
        fullname : 'Andy Warhol',
        aboutContact : 'American artist and producer who was a leading figure in the visual art movement known as pop art.',
        telephone:'+380671871839',
        email:'andy.warhol@gmail.com',
        birthDay:'06/08/1928',
        instaName: '@andyWorhol',
        instaUrl: `https://www.instagram.com/`,
        facebookName:'andyWorhol'
      }
  })

	return (
		<section className="main_content">
		<Header />
		<div className="contact_photo">
			<div className="contact_photo_img">
				<div to="#" title="contact photo"><img src={defaultphoto} alt="contact photo_"></img></div>
				<p>Click for <br></br> Upload Photo</p>
			</div>
		</div>
		<div className="contact_form">
			<form className="add_form" action="" method="POST">
				<div><input 
					name="contact_name" 
					type="text" 
					placeholder="Name"
					value = {state.user.name} >
				</input></div>
				<div><input 
					name="contact_surname" 
					type="text" 
					placeholder="Surname"
					value = {state.user.surname}>
				</input></div>
				<div><input 
					name="contact_phone" 
					type="text" 
					placeholder="Phone"
					value = {state.user.telephone}>
				</input></div>
				<div><input 
					name="contact_email" 
					type="text" 
					placeholder="Email"
					value = {state.user.email}>
				</input></div>
				<div><input 
					name="contact_bday" 
					type="text" 
					placeholder="Birthday"
					value = {state.user.birthDay}>
				</input></div>
				<div><input 
					name="contact_insta" 
					type="text" 
					placeholder="Instagram"
					value = {state.user.instaName}>
				</input></div>
				<div><input 
					name="contact_facebook" 
					type="text" 
					placeholder="Facebook"
					value = {state.user.facebookName}>
				</input></div>
				<div><textarea 
					name="contact_info" 
					id="" cols="30" 
					rows="10" 
					placeholder="Information"
					value = {state.user.aboutContact}>
				</textarea></div>
				<div>	
					<button>
						<span>Save</span>
					</button>
				</div>
			</form>
		</div>
	</section>
	)
}

export default Editcontact;