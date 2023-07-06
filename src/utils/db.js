import mongoose from "mongoose";

mongoose.set('strictQuery', true)

console.log(process.env.MONGO)

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
    }catch(e){
        throw new Error('Connection Failed')
    }
};

export default connect