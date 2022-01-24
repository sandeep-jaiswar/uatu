import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_DB_URL;

function connect(){
  if(mongoose.connections[0].readyState){
    console.log('connected already');
  }else{
    mongoose.connect(MONGODB_URI,()=>{
      console.log("db connected");
    });
  }
}

export default connect;