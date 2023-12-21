const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        blogs: [
            {
                type: mongoose.Types.ObjectId,
                ref: "blogs",
            },
        ],
    },
    { timestamps: true }
);

const userModel = mongoose.model("blogwebsites", userSchema);

module.exports = userModel;
