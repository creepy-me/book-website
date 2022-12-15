const express=require("express");
const path=require("path");
// const fs=require("fs");
const app=express();
const port=8000;
const bodyparser = require("body-parser");
const mongoose=require("mongoose");
const contact=require("./models/contact");
//express specific stuff
app.use('/static',express.static('static'));//for seving static files
app.use(express.urlencoded());
mongoose.connect('mongodb://localhost:27017/book-den', {useNewUrlParser: true},()=>{
    console.log("connected!!");
});
//pug specific stuff
app.set('view engine','pug');//set the template engine as pug
app.set('views',path.join(__dirname,'views'));//set the views directory

//endpoints
app.get('/',(req,res)=>{
    const con="This is the best book website out there. Enjoy!!!";
    const params={'title':'Universe is made up of stories',"content":con}
    res.status(200).render('home.pug',params);
})



app.post('/contact',(req,res)=>{
    try{
    const newContact = new contact(req.body);
    newContact.save().then(()=>{
        const con="This is the best book website out there. Enjoy!!!";
        const params={'title':'Universe is made up of stories',"content":con}
        res.status(200).render('contact.pug',params);
    })
    }catch(err){
        // res.status(400).send("Error in saving contact details!");
    }

    
})
app.get('/contact',(req,res)=>{
    const con="This is the best book website out there. Enjoy!!!";
    const params={'title':'Universe is made up of stories',"content":con}
    res.status(200).render('contact.pug',params);
})
//start the server
app.listen(port,()=>{
    console.log('The application started successfully on port ${port}');
});