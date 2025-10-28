
import Booking from "../models/Booking.js";
import { clerkClient } from "@clerk/express";
import Movie from "../models/Movie.js";


//Function to get user booking
export const getUserBookings=async(req,res)=>{

    try{
        const user=req.auth().userId;
        console.log("userid",user)
        const bookings=await Booking.find({user}).populate({   path:'show',     populate:{path:'movie'}
        }).sort({createdAt:-1});
        
console.log("bookings =",bookings);
        res.json({success:true,bookings});
    }catch(error){
console.log(error.message);
res.json({success:false,message:error.message})
    }
}

//Function to update favourite movie in clerk user metadata
export const updateFavorite=async(req,res)=>{

    try{
        const {movieId}=req.body;
     const userId=req.auth().userId;
const user=await clerkClient.users.getUser(userId);
if (!user.privateMetadata.favorites) {
  user.privateMetadata.favorites = []
}

if (!user.privateMetadata.favorites.includes(movieId)) {
  user.privateMetadata.favorites.push(movieId)
}else{
     user.privateMetadata.favorites= user.privateMetadata.favorites.filter(item=>item!=movieId)
}

await clerkClient.users.updateUserMetadata(userId, { privateMetadata: user.privateMetadata })

res.json({success:true,message:'Favorite movies updated.'})
      
    }catch(error){
console.log(error.message);
res.json({success:false,message:error.message})
    }
}


// Get the users favorite movies from the database

export const getFavorites=async(req,res)=>{

    try{
        const user=await clerkClient.users.getUser(req.auth().userId);
        const favorites=user.privateMetadata.favorites;

        //getting movie from db
const movies=await Movie.find({_id:{$in:favorites}})
res.json({success:true,movies})

    }catch(error){
console.log(error.message);
res.json({success:false,message:error.message})
    }
}

