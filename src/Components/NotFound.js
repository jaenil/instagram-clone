import React from 'react' ;
import image from './Assets/404-error-page-not-found.jpg' ;
import '../App.css' ;

const NotFound = () => {
    return(
        <div>
            404 error Not found <br/>
            <img className='image_notfound' src={image} alt='404_image' />
        </div>
        
    )
}

export default NotFound ;