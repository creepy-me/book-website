const mongoose=require("mongoose");

const contactSchema = new mongoose.Schema({
name : String,
phone : String,
email : String,
address : String,
description : String
});
module.exports = mongoose.model('contact',contactSchema);