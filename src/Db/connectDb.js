const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}goals`);
    console.log("DB connected successfully");
  } catch (err) {
    console.log(`Error : ${err}`);
  }
};

module.exports = connect;
