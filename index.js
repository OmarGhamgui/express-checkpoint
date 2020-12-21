const express = require('express');
const path = require('path');
const app=express();
const logger=require('./middlewares/logger')




app.use(logger);

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public' , 'index.html'))
});
app.get('/ourservices',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public' , 'ourservices.html'))
})
app.get('/contactus',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public' , 'contactus.html'))
});



const PORT= process.env.PORT || 5000;


app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));
