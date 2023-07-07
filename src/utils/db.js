import mongoose from "mongoose";

mongoose.set('strictQuery', true)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
      username: 'dev',
      password: process.env.PASSWORD
    },
    dbName: 'devport'
  };

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO,options)
    }catch(e){
        throw new Error('Connection Failed'+e)
    }
};

export default connect