const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
      email : {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String, 
        required: true
      },
      token: String,   
    },
    {
        timestamps: true,
        toJson: {
            transform: (_doc, user) => {
                delete user.password 
                return user 
            }
        }
    }
)

module.exports = mongoose.model('User', userSchema)