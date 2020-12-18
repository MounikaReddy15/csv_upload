
const mongoose = require('mongoose');

// setting up multer
const multer = require('multer');

// setting up path where the file will be stored
const path = require('path');

// define which path
// the string is converted to path using path module
const AVATAR_PATH = path.join('/uploads/avatars');


const uploadSchema = new mongoose.Schema({
    avatar: {
        type: String
    },
    name: {
      type: String
  }
    
},
{
   timestamps: true
})

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file. originalname + '-' + Date.now());
    }
  });



 // attaches the diskStorage on multer in the storage property
 // single says only one instance will be uploaded of avatar  
 uploadSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');
 //to make avatarpath publically available  
 uploadSchema.statics.avatarPath = AVATAR_PATH;

// before exporting we need to tell, its a model in the db
const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;

