import React from 'react' ;
import Webcam from 'react-webcam' ;
import { withStyles } from '@material-ui/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';


const styles = (theme) => ({
    container :{
     
        width:'100%' ,
        maxHeight:'740px' ,
    } ,
    webcam : {
        width: '100%' ,
        Height:'100%' ,
    }  ,
    capture_img : { 
        width: '60px',
        hight: '60px',
        color:'black',
    }
})

const WebcamComponent = (props) => {
    const { classes } = props ;
    return(
        <>
          <div className={classes.container}>
                    <Webcam 
                    mirrored={true}
                    className={classes.webcam}
                    imageSmoothing={true}
                     />
                        {/* capture button*/}
                        <IconButton 
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.capture_img}
                        > 
                            <PhotoCameraIcon />
                        </IconButton>
                        {/* save button*/}
                        <IconButton
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.capture_img}
                        >
                            <SaveIcon />
                        </IconButton>
                        {/* delete button*/}
                        <IconButton
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.capture_img}
                        onClick={() => console.log('clicked delete button')}
                        >
                        <DeleteIcon /> 
                        </IconButton> 
            </div>
        </>
    )
}


export default withStyles(styles)(WebcamComponent) ;