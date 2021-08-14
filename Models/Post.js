const mongoose = require("mongoose");

//Create data

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        default: Date.now,
    },
});

//Create model, give it a name and schema to use.
module.exports = mongoose.model("Posts", PostSchema);
