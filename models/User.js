const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
// const thoughtSchema = require('./Thought');

const userSchema = new Schema (
    {
        username: {
            type: String,
            //Unique,
            required: true,
            //Trimmed
        },

        email: {
            type: String,
            required: true,
            //unique
            //Must match a valid email address (look into Mongoose's matching validation)
        },

        thoughts: [Thought],
        friends: [User],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;