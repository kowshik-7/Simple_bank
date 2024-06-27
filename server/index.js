const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const detailModel = require("./models/details")
const User = require("./models/details")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/bank")

app.post("/transfer", async (req,res) => {
    const { senderId, receiverId, amount } = req.body;
    const sender =  User.findById(senderId);
    const receiver =  User.findById(receiverId);

    // const senderObjectId = new mongoose.Types.mail(senderId);
    // const receiverObjectId = new mongoose.Types.mail(receiverId);
      sender.balance -= amount;
      receiver.balance += amount;

      const updatedSender = await  User.findOneAndUpdate(
        { mail: senderId },
        { $inc: { balance: -amount } },
      );

      const updatedReceiver = await User.findOneAndUpdate(
        { mail: receiverId },
        { $inc: { balance: amount } },
      );

      res.json({ success: true, message: 'Transfer successful' });

    //   sender.save();
    //   receiver.save();
})


app.post("/login",(req,res)=>{
    const {mail,password,number,name,balance} = req.body;  
    detailModel.findOne({mail:mail})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json({
                    success: true,
                    user: {
                      name: user.name,
                      mail: user.mail,
                      balance: user.balance,
                      number:user.number
                    }})
            }
            else{
                res.json("password is wrong")
            }
        }
        else{
            res.json("user not found");
        }
    })
})

app.post("/register",(req,res) =>{
    detailModel.create(req.body)
    .then( detail => console.log(res.json(detail)))
    .catch(err => console.log(err))
})

app.listen(4000,() => {
    console.log("server is running");
})