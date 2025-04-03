const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {type: Number, required: true, unique: true},
    user_name: {type: String, required: true},
    user_dob: {type: Date, required: true},
    user_sex: {type: String, required: true},
    user_email: {type: String, required: true, unique: true},
    user_password: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema)