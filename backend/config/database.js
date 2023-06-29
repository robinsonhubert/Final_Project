const mongoose=require('mongoose');

const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://Hubert:hubert2001@cluster0.6ubkzec.mongodb.net/project001?retryWrites=true&w=majority")
    .then((data)=>{
        console.log(`Mongodb connected with server : ${data.connection.host}`);
    })
}
module.exports=connectDatabase;