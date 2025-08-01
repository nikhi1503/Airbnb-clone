if(process.env.NODE_ENV !="production"){
  require('dotenv').config()
}



const express = require("express");
const app= express();
const mongoose= require("mongoose");
const path=require("path");
const methodOverride= require("method-override")
const ejsMate= require("ejs-mate") ;
const ExpressError = require("./utils/ExpressError.js");
const session= require("express-session")
const MongoStore = require('connect-mongo');
const flash=require("connect-flash")
const passport=require("passport")
const LocalsStrategy=require("passport-local")
const User=require("./models/user.js")
const listingRouter=require("./routes/listing.js");
const reviewRouter =require("./routes/review.js");
const userRouter =require("./routes/user.js");



const dbUrl=process.env.ATLASDB_URL;
main()
.then(()=>{
console.log("connected to db")
})
.catch((err)=>{
 console.log(err)
})
async function main(){
    await mongoose.connect(dbUrl)
};

app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public")))


const store =MongoStore.create({
    mongoUrl:dbUrl,
     crypto:{
        secret:process.env.SECRET,
     },
     touchAfter:24*3600,
})

store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE", err)
})
const sessionOption ={
    store,
secret:process.env.SECRET,
resave:false,
saveUninitialized:true,
cookie:{
expires:Date.now()+7*24*60*60*1000,
maxAge:7*24*60*60*1000,
httpOnly:true,

}
};

app.get ("/",(req ,res)=>{
 res.redirect("/listings")
});


app.use(session(sessionOption))
app.use(flash());

app.use(passport.initialize())
app.use(passport.session());
passport.use(new LocalsStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success")
    res.locals.error=req.flash("error")
    res.locals.currUser=req.user ;
    next();
})

// app.get("/demouser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"student@gmail",
//         username:"nikhil",
//     })
//  let registeruser= await  User.register(fakeUser,"helloworld");
//  res.send(registeruser);
// })

   app.use("/listings" ,listingRouter);
   app.use("/listings/:id/reviews",reviewRouter)
   app.use("/",userRouter)
  

app.all(/.*/,(req,res,next)=>{
    next(new ExpressError(400,"page not Found"));
})
app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong"}=err;
    res.status(statusCode).render("error.ejs",{message})
    // res.status(statusCode).send(message)

});

app.listen(8080,()=>{
    console.log("server  listening at port 8080")
   
})












































































// app.get("/testing",async(req,res)=>{
//     let samplelistting=new Listing({
//         title:"my new villa",
//         description:"by the beach",
//         price:1200,
//         location:"Calangute goa ",
//         country:"india",
//     });
// await samplelistting.save();
//  console.log("sample listing created");
//  res.send("successful testing ")

// });
