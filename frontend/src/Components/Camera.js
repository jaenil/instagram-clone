import React,{useState} from 'react' ;
import Webcam from 'react-webcam' ;
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';


const styles = (theme) => ({
    container :{
        width: '100% !important',
		height: '100vh !important',
        overflow : 'hidden' ,
    } ,
    screenshot : {
        flexShrink: 0,
		width: 'auto',
		height: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
    } ,
    buttonPanel : { 
        position: 'absolute',
        height: '2cm',
        bottom: '0.5cm',
        zIndex: '2',
    } ,
    button : {
        color: 'black',
		width: '100%',
		height: '100%',
    } ,
    webcam : {
        width: '100%' ,
        Height:'100%' ,
    }  ,
   
})

const WebcamComponent = (props) => {
    const webcamRef = React.useRef(null);
    const { classes } = props ;
    const [img_source ,setImg_source] = useState('') ;
   
    const Capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg_source(imageSrc);
    }
    const save_function = () => {
        var stored_images = JSON.parse(localStorage.getItem('images')) ;
        if (stored_images === null ) {
            stored_images = [] ;
        }
        stored_images.push(img_source) ;
        localStorage.setItem('images' ,JSON.stringify(stored_images)) ;
        setImg_source('');
    }
    return(
        <>
        {img_source === '' ? 
                <div className={classes.container}>
                <Webcam 
                mirrored={true}
                className={classes.webcam}
                imageSmoothing={true}
                ref= {webcamRef}
                audio={false}
                screenshotQuality={1}
                screenshotFormat ='image/jpeg'
                />
                <div className={classes.buttonPanel}>
                {/* capture button*/}
                <IconButton 
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                onClick={Capture}
                > 
                <PhotoCameraIcon />
                </IconButton>                                   
                </div>      
        </div>   
        :
        <div className={classes.container}>    
            <div>
                <img src={img_source} alt='selfie' className={classes.screenshot}/>
                <div className={classes.buttonPanel}>
                     {/* save button*/}
                     <IconButton
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={save_function}
                        className= {classes.button}
                    >
                    Save
                    <SaveIcon />
                    </IconButton>      
                    {/* delete button*/}
                    <IconButton
                    onClick={() => setImg_source('')}
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    >
                        Discard
                        <DeleteIcon /> 
                    </IconButton>     
                </div>
                </div>
             </div>   
        }
  
            
           
        </>
    )
}


export default withStyles(styles)(WebcamComponent) ;