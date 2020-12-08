
const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema({
    upload: {
        type: String
    },
    
},
{
   timestamps: true
})

// before exporting we need to tell, its a model in the db
const Csv = mongoose.model('Csv', csvSchema);

module.exports = Csv;

