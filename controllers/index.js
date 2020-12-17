

const Upload = require('../models/upload');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

module.exports.home = async function(req,res) {
    const upload = await Upload.find({});
    // console.log(upload)
    return res.render('home', {
        title: "CSV Upload",
        upload:upload
    });
}


module.exports.uploadCsv = async function(req,res) {
try{
    const upload = new Upload({});
    Upload.uploadedAvatar(req,res,function(err){
        if(err) {console.log('******Multer Error:', err)}
        // check for file
        if(req.file) {
            console.log('upload')
            // if(upload.avatar) {
            //     console.log('avatar')
            //     fs.unlinkSync(path.join(__dirname, '..', upload.avatar));
            // }
            // this is saving the path of the uploaded file into the avatar field in the user
            upload.avatar = Upload.avatarPath + '/' + req.file.filename;
        }
            upload.save();
            // console.log(upload);
            return res.redirect('back');

    });
  }
  catch {
        return res.redirect('back');
  }
}


module.exports.displayFile = async function(req,res) {
    const results = [];
    // console.log('display');
    console.log(req.query.id, "upload id");
    let upload = await Upload.findById(req.query.id);
    // console.log(upload)
    fs.createReadStream(path.join(__dirname,'..',upload.avatar))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    // console.log((results[0]));
    return res.render('display', {
        title: "Display CSV",
        results: results
    });
    

    })
}

// <% for(let result of results){ %> 
//     <tr>
//       <% for(let j in result){ %>
                          
//           <td>
//               <%= j%>
//           </td>
//       <%}%>
//     </tr>
// <% for(let j in results){ %> 
//     <tr>
//     <% for(let k of j){ %> 
   
//         <td> <%= j[k] %>  </td>
//     <% } %>  
//     </tr>

// <% } %>