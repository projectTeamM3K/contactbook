import React, {useState} from 'react';
import Bitmap from '.././img/Bitmap.png'; 
import insta1 from '.././img/insta1.png'; 
import insta2 from '.././img/insta2.png'; 
import insta3 from '.././img/insta3.png'; 
import insta4 from '.././img/insta4.png'; 


const Contact  = () =>{
	const [state, setState]  = useState({
      user:{
        fullname : 'Andy Warhol',
        aboutContact : 'American artist and producer who was a leading figure in the visual art movement known as pop art.',
        telephone:'+380671871839',
        email:'andy.warhol@gmail.com',
        birthDay:'06/08/1928',
        instaName: '@dkristiwa'
      }
  })
	
    return (  
      <div className='contact-page'>
    <img src={Bitmap} className = "contact-page__main-photo" alt="contact main photos"></img>
    <h2 className = 'contact-page__contact-full-name'>
        {state.user.fullname}
    </h2>
    <p className = 'contact-page__contact-text-about'>
      {state.user.aboutContact}
    </p>
    <a className = 'contact-page__phone-number' href={`tel:${state.user.telephone}`}>
      {state.user.telephone}
    </a>
    <a  className = 'contact-page__email' href={`mailto:${state.user.email}`}>
      {state.user.email}
    </a>
    <p className = 'contact-page__date-of-birth'>
      {state.user.birthDay}
    </p>
    <a className = 'contact-page__insta-acc' href={`https://www.instagram.com/${state.user.instaName.slice(1)}`}>
      {state.user.instaName}
    </a>
    <ul className = 'contact-page__insta-last-photos'>
      <li className = 'contact-page__insta-last-photos__item'>
        <img src = {insta1} alt="contact photos from instagram"></img>
      </li>
      <li className='contact-page__insta-last-photos__item'>
        <img src={insta2} alt="contact photos from instagram"></img>
      </li>
      <li className='contact-page__insta-last-photos__item'>
        <img src={insta3} alt="contact photos from instagram"></img>
      </li>
      <li className='contact-page__insta-last-photos__item'>
        <img src={insta4} alt="contact photos from instagram"></img>
      </li>
      <li className='contact-page__insta-last-photos__item'>
        <img src={insta2} alt="contact photos from instagram"></img>
      </li>
      <li className='contact-page__insta-last-photos__item'>
        <img src={insta4} alt="contact photos from instagram"></img>
      </li>
    </ul>
  </div>
    )
}

export default Contact;