const mongoose = require('mongoose')
const { Schema } = mongoose

const foodRequestSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('foodRequest', foodRequestSchema)
