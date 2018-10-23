const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RobotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageURL: {
        type: String,
        required: true
    }
})

module.exports = Robot = mongoose.model('robot', RobotSchema)