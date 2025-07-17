// import mongoose from "mongoose";
const mongoose = require("mongoose");
const initData =require("./data.js")
const listing = require("../models/listing.js");

const mongo_url ="mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
console.log("connected to db")
})
.catch((err)=>{
 console.log(err)
})
async function main(){
    await mongoose.connect(mongo_url)
}

const initDB= async()=>{
   await  listing.deleteMany({});
     initData.data= initData.data.map((obj)=>({...obj, owner:"6877f96812241d324b904b84"}))

   await listing.insertMany(initData.data);
   console.log("data was intilalized")
}
initDB();