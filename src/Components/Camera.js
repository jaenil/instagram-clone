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
      /*  display : 'flex' ,
        alignItems :'center' ,
        justifyContent : 'center' ,
        */
    } ,
    webcam : {
        width: '100%' ,
        Height:'100%' ,
    }  ,
    capture_img : { 
        width: '60px',
        hight: '60px',
    } ,
    delete_img : {
      marginLeft : '40px' ,
    }
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
                    {/* capture button*/}
                    <IconButton 
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.capture_img}
                    onClick={Capture}
                    > 
                    Click
                    <PhotoCameraIcon />
                    </IconButton>       
            </div>
            <div className={classes.container_images}>
                {img_source === '' 
                ? 
                <div>  </div>
                :
                <div>
                    <img src={img_source} alt='selfie'/>
                         {/* save button*/}
                         <IconButton
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={save_function}
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
                    className={classes.delete_img}
                    >
                        Discard
                        <DeleteIcon /> 
                    </IconButton>     
                </div>
                }
            </div>
        </>
    )
}


export default withStyles(styles)(WebcamComponent) ;