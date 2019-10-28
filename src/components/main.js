import React from 'react';
import Header from './header';
import contact1 from '.././img/Bitmap.png';
import contact2 from '.././img/teammate_headline__userpic.jpg';

const Main =  () => {
 return (
 	<div>
 	<Header />
 	 <div className="all-contacts">

        <div className="contact">
            <img src={contact1} alt="contact main photo_"></img>
                <div>
                    <h2><a href =  "/contact">Andy Warhol</a></h2>
                    <p>Some text here</p>
                </div>
            <a>
                <i className="icon ion-ios-more"></i>
            </a>    
        </div>
        <div className="contact">
                <img src={contact2} alt="contact main photo_"></img>
                    <div>
                        <h2><a href =  "/contact">Ivan Ivanov</a></h2>
                        <p>Some text here</p>
                    </div>
                <a>
                    <i className="icon ion-ios-more"></i>
                </a>    
        </div>
     </div>  
    </div>

 	)
}

export default Main;