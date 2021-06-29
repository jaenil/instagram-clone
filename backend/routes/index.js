var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({'message':'Hello there'})
});

//send image in backend
router.post('/images', function(req ,res){
  // uploading images to public/images/
})

//retrieve image in frontend

//for getting all images
router.get('/images', function(req,res){
 // get images public/images/
})

// for getting specific images


module.exports = router;
