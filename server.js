const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const libraryRouter = require('./Router/libraryRouter');


const app = express();


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Orgin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});


app.use(bodyParser.urlencoded({ extended: true}));


app.use(bodyParser.json());


mongoose.connect("mongodb+srv://athirarun219:athira@cluster0.x9qiwrb.mongodb.net/",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("database conected");

})
.catch((error)=>{
 console.log(error);
})

app.use('/', libraryRouter);






const port = 3000;
app.listen(port, function () {
	console.log("Server is listening at port:" + port);
});


