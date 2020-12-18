

const Upload = require('../models/upload');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');


// home page
module.exports.home = async function(req,res) {
    const upload = await Upload.find({});
    return res.render('home', {
        title: "CSV Upload",
        upload:upload
    });
}


// to upload csv
module.exports.uploadCsv = async function(req,res) {
try{
    const upload = new Upload({});
    Upload.uploadedAvatar(req,res,function(err){
        if(err) {console.log('******Multer Error:', err)}
        // check for file
        if(req.file) {
            // if(upload.avatar) {
            //     console.log('avatar')
            //     fs.unlinkSync(path.join(__dirname, '..', upload.avatar));
            // }
            // this is saving the path of the uploaded file into the avatar field in the user
            upload.avatar = Upload.avatarPath + '/' + req.file.filename;
            upload.name = req.file.originalname;
        }
            upload.save();
            return res.redirect('back');

    });
  }
  catch {
        return res.redirect('back');
  }
}

// to view particular csv file
module.exports.displayFile = async function(req,res) {
    const results = [];
    let upload = await Upload.findById(req.query.id);
    fs.createReadStream(path.join(__dirname,'..',upload.avatar))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    return res.render('display', {
        title: "Display CSV",
        results: results
    });
})
}


// api requests
// to show list of uploads
module.exports.showUploads = async function(req,res) {
    const upload = await Upload.find({});
    res.status(200).json({
        message: "List of Uploads",
        Uploads: upload
    })
}


// shows the data of a particular csv
module.exports.displayUpload = async function(req,res) {
    try{
    const results = [];
    let upload = await Upload.findById(req.params.id);
    fs.createReadStream(path.join(__dirname,'..',upload.avatar))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    res.json(results);
    })
    }
catch(err){
    res.json({message: err});
   }
}