const express=require("express");
 const router=express.Router({mergeParams: true});
const wrapAsync =require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review =require("../models/review.js");
const Listing =require("../models/listing.js");
const {validateReview,isReviewAuthor, isLoggedIn} =require("../middleware.js");

const reviewcontroller= require("../controllers/review.js")

//REVIEW 
//POST ROUTE


router.post("/",
   isLoggedIn,
   validateReview,
   wrapAsync(reviewcontroller.createReview));


//Deleete review 
router.delete("/:reviewId",
   isLoggedIn,
   isReviewAuthor,
   wrapAsync(reviewcontroller.destoryReview))

 module.exports=router;