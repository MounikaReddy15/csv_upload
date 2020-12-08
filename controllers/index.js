

const CSv = require('../models/csv');

module.exports.home = async function(req,res) {
    return res.render('home', {
        title: "CSV Upload"
    });
}

module.exports.uploadCsv = async function(req,res) {

}

module.exports.displayFile = async function(req,res) {
}