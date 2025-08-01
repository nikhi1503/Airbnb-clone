const Listing=require("../models/listing")

module.exports.index =async(req ,res)=>{
        const alllistings= await Listing.find({});
        res.render("listings/index.ejs",{alllistings});
   
}

module.exports.newroute=(req,res)=>{
  
    res.render("listings/new.ejs")
};

module.exports.showListing= async(req,res)=>{
        let{id}=req.params;
        const listing =await Listing.findById(id)
        .populate({
          path:"reviews",
          populate:{
            path:"author"
          },
          })
        .populate("owner");
        if(!listing){
          req.flash("error","this listing not exist")
           return res.redirect("/listings")
        }
        // console.log(listing);
        res.render("listings/show.ejs",{listing})
}

module.exports.createListing=async(req,res,next)=>{
 let url= req.file.path;
 let filename=req.file.filename;
//  console.log(url,"..",filename)
 
           const newListing= new Listing(req.body.listing);
           newListing.owner=req.user._id;
           newListing.image={url,filename};
        await newListing.save();
        req.flash("success","new listing Created")
         res.redirect("/listings");   

    }

    module.exports.renderEditForm=async(req,res)=>{
        let{id}=req.params;
            const listing =await Listing.findById(id);
             if(!listing){
              req.flash("error","this listing not exist")
               return res.redirect("/listings")
            }
            let originalImageUrl= listing.image.url;
           originalImageUrl= originalImageUrl.replace("/upload","/upload/w_250")

            res.render("listings/edit.ejs",{ listing ,originalImageUrl})
    }

    module.exports.updateListing=async(req ,res)=>{
        const {id}=req.params;
       let listing=   await   Listing.findByIdAndUpdate(id,{...req.body.listing});

if(typeof req.file!=="undefined"){
   let url= req.file.path;
            let filename=req.file.filename;
            listing.image={url,filename}
            await listing.save();

}
           
      req.flash("success","listing Updated")
    res.redirect(`/listings/${id}`)
    }

    module.exports.deleteListing=async(req,res)=>{
    let{ id }= req.params;
  let deletelisting= await  Listing.findByIdAndDelete(id);
//   console.log(deletelisting);
req.flash("success","listing Delete")
  res.redirect("/listings");
}