const express=require("express");
const router=express.Router();
const Listing =require("../models/listing.js");
const wrapAsync =require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema}=require("../schema.js");
const {isLoggedIn,isOwner ,validateListing}=require("../middleware.js")
const  listingController=require("../controllers/listings.js")
const multer  = require('multer')
const{storage} =require("../cloudConfig.js")
const upload = multer({ storage })

router
.route("/")
.get(wrapAsync(listingController.index))
.post(
  isLoggedIn,
    upload.single('listing[image]'),
  validateListing,

  wrapAsync(listingController.createListing),
  
);



//New route 
router.get("/new",isLoggedIn,listingController.newroute);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
  isLoggedIn,
  isOwner,
  upload.single('listing[image]'),
  validateListing,
  wrapAsync(listingController.updateListing))
  .delete(
  isLoggedIn,
    isOwner,
    wrapAsync(listingController.deleteListing))






//edit Route 
router.get("/:id/edit",
  isLoggedIn,
    isOwner,
  wrapAsync(listingController.renderEditForm));


module.exports=router;