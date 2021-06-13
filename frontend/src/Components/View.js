import React,{useEffect,useState,Children} from 'react';
import uniqid from 'uniqid';
import {
    Link
  } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = (theme) => ({
    container : {
     width: '100% !important',
     padding : '10px' , 
     display : 'grid' ,
     alignItems : 'center' ,
     justifyContent : 'space - evenly' ,
     flexDirection : 'column' , 
     gridGap: '50px 100px' , 
     gridTemplateColumns: 'auto auto auto auto',
    } ,

    return_image :{
    width: '100% !important',
    maxWidth : '700px' ,
    } ,
})
const View = (props) => {
    const [results , setResults] = useState([]) ;
    const [change , setChange] = useState('') ;
    const { classes } = props ;
    useEffect(() => {
       const get_function = () => {
        var get_images = JSON.parse(localStorage.getItem('images')) ;
        if ((get_images === null) || !(Array.isArray(get_images))) {
            get_images = [] ;
        }
        setResults(get_images) ; 
       } 
       get_function() ;
    }, [])
    const Delete_function = (change_image) => {}
    return(
        <React.Fragment>
            view component
            <div>
                {results === null || results.length === 0 
                ? 
                <div> 
                  NO images yet click a image at : 
                  <Link to="/capture">Capture</Link>
                </div>
                :
                <div className={classes.container}> 
                    {
                    results.map(image => {
                    return(
                        <div className={classes.second_container} key={uniqid('image-')}>
                        <img src={image} alt='return_image' className={classes.return_image}/> 
                        <IconButton style={{color:'grey'}} onClick={() => Delete_function(image)}>Delete <DeleteIcon /></IconButton> 
                        </div>
                    )
                })}
                </div>
                }
                
            </div>
        </React.Fragment>
    )
}

export default withStyles(styles)(View) ;