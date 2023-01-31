const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            //use mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            //default value is set to new ObjectId
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use getter method to format the timestamp on query
            
        },
    },
    {
        toJSON: {
          getters: true,
        },
    }
);

module.exports = reactionSchema;