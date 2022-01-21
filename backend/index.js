const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=process.env.PORT||5000;

mongoose.connect(process.env.MONGO_LINK,{
useNewUrlParser: true,
useUnifiedTopology: true,
// useCreateIndex: true
},
(err)=>{
    if(err) throw err;
    console.log("Database Succesfully Connected");
}
);

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})

app.use("/users", require("./routes/users"));