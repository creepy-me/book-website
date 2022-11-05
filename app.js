const express=require("express");
const path=require("path");
// const fs=require("fs");
const app=express();
const port=8000;

//express specific stuff
app.use('/static',express.static('static'));//for seving static files
app.use(express.urlencoded());

//pug specific stuff
app.set('view engine','pug');//set the template engine as pug
app.set('views',path.join(__dirname,'views'));//set the views directory

//endpoints
app.get('/',(req,res)=>{
    const con="This is the best book website out there. Enjoy!!!";
    const params={'title':'Universe is made up of stories',"content":con}
    res.status(200).render('home.pug',params);
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