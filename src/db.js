
require('dotenv').config({path: '../.env'});
const {USER, PASSWORD, HOST} = process.env;
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@esquinaverdebd.bqe3ik4.mongodb.net/`)
}

module.exports = mongoose;