const mongoose = require('mongoose');
const artifactSchema = new mongoose.Schema({
    owner:String,
    address:String,
    task:String,
    maxValue:String,
    currentWinner:String,
    currentBid:String,
    bid:Object,
    tokenId:String,
});
module.exports = mongoose.model('artifact',artifactSchema);