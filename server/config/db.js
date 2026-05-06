// // @ts-nocheck
//  import mongoose from 'mongoose';
 
//  const connectDB = async () => {

//   try {
//     mongoose.connection.on('connected', () => console.log('Database connected'));
    
//     await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`)
//       console.log("✅ Connected DB:", mongoose.connection.name);
//   } catch (error) {
//     console.log(error.message);
    
//   }
//  }


//  export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "quickshow",
    });

    console.log("✅ Connected DB:", mongoose.connection.name);

  } catch (error) {
    console.log("❌ DB ERROR:", error.message);
  }
};

export default connectDB;