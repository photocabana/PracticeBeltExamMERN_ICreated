const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minlength: [3, "Title must have more than 2 chars"]
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [5, "Price must be more than 4 dollars"]
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minlength: [8, "Description must be more than 8 characters"]
        },
    }, 
    {timestamps: true}
)

const Users = mongoose.model('User', UserSchema)
module.exports = Users
