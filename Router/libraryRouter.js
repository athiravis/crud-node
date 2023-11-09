const bookSchema = require("../Model/bookSchema");
const express = require('express');
const libraryRouter=express.Router();

// ADD
libraryRouter.post('/add',(req,res)=>{

    const Data = new bookSchema({
    summery:req.body.summery,
    title:req.body.title,
    author:req.body.author,
    });
    Data.save()
        .then((data)=>{
            res.status(200).json({
                success:true,
                error:false,
                data:data,
            });
        })
            .catch((err)=>console.log(err));

        });


// View

libraryRouter.get('/view',(req,res)=>{
    bookSchema.find()
    .then((data)=>{
        res.status(200).json({
            success:true,
            error:false,
            data:data,
           
        });
    })
    .catch((err)=>console.log(err));
})

// single view

libraryRouter.get('/view-single/:ids',(req,res)=>{
    bookSchema.findOne({
        _id:req.params.ids
    })
    .then((data)=>{
        res.status(200).json({
            success:true,
            error:false,
            data:data
        });
       
    })
    
    .catch((err)=>console.log(err));
})

// update

libraryRouter.put('/update/:id',(req,res)=>{
    bookSchema.findOne({
    _id:req.params.id
})
.then((data)=>{
    data.title=req.body.title;
    data.summery=req.body.summery;
    data.author=req.body.author;
    
    data.save()
    .then((data)=>{
        res.status(200).json({
            success:true,
            error:false,
            data:data,
            message:'Update successfully'
        });
    })
    .catch((err)=>console.log(err));
})
.catch((err)=>console.log(err));
})

// delete
libraryRouter.delete('/delete/:id',(req,res)=>{
    bookSchema.deleteOne({
        _id:req.params.id,
    })
    .then(()=>{
        res.redirect('/view');
    })
    .catch((err)=>console.log(err));
})

module.exports=libraryRouter    