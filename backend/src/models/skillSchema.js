import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },

        icon: {
            type: String,
            default: "",
        },

        category: {
            type: String,
            enum: [
                "Frontend",
                "Backend",
                "Database",
                "Language",
                "Framework",
                "Library",
                "Tools",
                "DevOps",
                "Other",
            ],
            default: "Other",
        },

        featured: {
            type: Boolean,
            default: false,
        },

        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Skill", skillSchema);