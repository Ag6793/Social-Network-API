const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },

        thoughts: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Thought' }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'}],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
const User = model('user', userSchema);

module.exports = User;