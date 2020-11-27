const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
// Load env variables
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 4000;
// mongoDb setup
mongoose.connect('mongodb://localhost/assignments')
    .then(()=> console.log("connection to db successfull"))
    .catch((err)=> console.log(err));

//pipeline and middleware
app.use(express.json());
app.use(cors());
//mongoDb Schema
const cardSchema = new mongoose.Schema({
    value : String,
    house : String
});
const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String
});
const User = mongoose.model('User',userSchema);

app.post('/api/v1/login', (req, res) => {
    Contact.find().then((contact) => res.send(contact));
});

app.post('/api/v1/register', (req, res) => {
    const user = new User(req.body);
    user.save();
    res.send(user);
});

app.get('/api/v1/analytics', async (req, res)=>{
    let analyticsData = await Contact.find({}, {
        _id : 0,
        date: 1
      });
    let date = analyticsData.map((item)=>{
        return item.date.getDate();
    })
    console.log(date);
    res.send(date);
});

app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} server running at port ${PORT}`)
);