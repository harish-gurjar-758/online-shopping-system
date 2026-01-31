import mongoose from "mongoose";

// Product Schema 
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        
    },
    category:{
        type:""
    },
    banner:[],
})