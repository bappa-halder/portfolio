import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: ""
    },

    technologies: [
        {
            type: String
        }
    ],

    github: {
        type: String
    },

    live: {
        type: String
    },

    featured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model("Projects", projectSchema);