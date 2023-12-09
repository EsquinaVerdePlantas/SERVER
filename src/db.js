
require('dotenv').config({ path: '../.env' });
const { USER, PASSWORD, HOST } = process.env;
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    let con = await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@esquinaverdebd.bqe3ik4.mongodb.net/?retryWrites=true&w=majority`)
    console.log(`mongodb connected: ${con.connection.host}`);
}

module.exports = mongoose;