const mongoose = require("mongoose");
const DBuri = process.env.MONGO_URI;
const connect = async ()=>{
    return await mongoose.connect(DBuri, { useNewUrlParser: true, useUnifiedTopology: true, });
};

module.exports = {connect};