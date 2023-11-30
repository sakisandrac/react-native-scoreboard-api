const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    bananas : {
        type: Number,
        required: false
    },
    lastDayPlayed : {
        type: String,
        required: false
    },
    longestStreak : {
        type: Number,
        required: false
    },
    name : {
        type: String,
        required: false
    },
    stars : {
        type: Number,
        required: false
    },
    subscribed : {
        type: Boolean,
        required: false
    },
    uid : {
        type: String,
        required: false
    }
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel