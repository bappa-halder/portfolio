import Skill from "../models/skillSchema.js";
import Project from "../models/projectSchema.js";
import cloudinary from "../config/cloudinary.js";
import skillSchema from "../models/skillSchema.js";


// =======================================
// Add Skill
// =======================================
export const addSkill = async (req, res) => {
    try {
        const userId = req.userId;

        const { name, category, featured, order } = req.body;

        const exists = await Skill.findOne({
            name: {
                $regex: new RegExp(`^${name.trim()}$`, "i"),
            },
        });

        if (exists) {
            return res.status(400).json({
                success: false,
                message: "Skill already exists",
            });
        }

        let icon = "";

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "skills",
            });

            icon = result.secure_url;
        }

        const skill = await Skill.create({
            user: userId,
            name,
            category,
            featured: featured === "true" || featured === true,
            order,
            icon,
        });

        return res.status(201).json({
            success: true,
            message: "Skill added successfully",
            data: skill,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =======================================
// Get All Skills
// =======================================
export const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find().sort({
            order: 1,
            createdAt: 1,
        });

        const projects = await Project.find();

        const data = skills.map((skill) => {
            const usedInProjects = projects.filter((project) =>
                project.technologies.includes(skill.name)
            ).length;

            return {
                ...skill.toObject(),
                usedInProjects,
            };
        });

        return res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =======================================
// Get Featured Skills
// =======================================
export const getFeaturedSkills = async (req, res) => {
    try {
        const skills = await Skill.find({
            featured: true,
        }).sort({
            order: 1,
        });

        return res.status(200).json({
            success: true,
            data: skills,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =======================================
// Get One Skill
// =======================================
export const getOneSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found",
            });
        }

        const usedInProjects = await Project.countDocuments({
            technologies: skill.name,
        });

        return res.status(200).json({
            success: true,
            data: {
                ...skill.toObject(),
                usedInProjects,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =======================================
// Update Skill
// =======================================
// export const updateSkill = async (req, res) => {
//     try {
//         const skill = await skillSchema.findById(req.params.id);

//         if (!skill) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Skill not found",
//             });
//         }

//         if (skill.user.toString() !== req.userId) {
//             return res.status(403).json({
//                 success: false,
//                 message: "Unauthorized",
//             });
//         }

//         let icon = skill.icon;

//         if (req.file) {
//             if (skill.icon) {
//                 const publicId = skill.icon
//                     .split("/")
//                     .slice(-2)
//                     .join("/")
//                     .split(".")[0];

//                 await cloudinary.uploader.destroy(publicId);
//             }

//             const result = await cloudinary.uploader.upload(req.file.path, {
//                 folder: "skills",
//             });

//             icon = result.secure_url;
//         }

//         skill.name = req.body.name ?? skill.name;
//         skill.category = req.body.category ?? skill.category;
//         skill.order = req.body.order ?? skill.order;

//         if (req.body.featured !== undefined) {
//             skill.featured =
//                 req.body.featured === "true" ||
//                 req.body.featured === true;
//         }

//         skill.icon = icon;

//         await skill.save();

//         return res.status(200).json({
//             success: true,
//             message: "Skill updated successfully",
//             data: skill,
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };


export const updateSkill = async (req, res) => {
    try {
        const skill = await skillSchema.findById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found",
            });
        }

        if (skill.user.toString() !== req.userId) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const oldName = skill.name;

        let icon = skill.icon;

        // Upload new icon
        if (req.file) {
            if (skill.icon) {
                const publicId = skill.icon
                    .split("/")
                    .slice(-2)
                    .join("/")
                    .split(".")[0];

                await cloudinary.uploader.destroy(publicId);
            }

            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "skills",
            });

            icon = result.secure_url;
        }

        // Duplicate name check
        if (
            req.body.name &&
            req.body.name.trim().toLowerCase() !== oldName.toLowerCase()
        ) {
            const exists = await skillSchema.findOne({
                _id: { $ne: skill._id },
                name: {
                    $regex: new RegExp(`^${req.body.name.trim()}$`, "i"),
                },
            });

            if (exists) {
                return res.status(400).json({
                    success: false,
                    message: "Skill already exists",
                });
            }
        }

        // Update skill
        skill.name = req.body.name ?? skill.name;
        skill.category = req.body.category ?? skill.category;
        skill.order = req.body.order ?? skill.order;
        skill.icon = icon;

        if (req.body.featured !== undefined) {
            skill.featured =
                req.body.featured === "true" ||
                req.body.featured === true;
        }

        await skill.save();

        // Update all project technologies
        if (req.body.name && req.body.name !== oldName) {
            await Project.updateMany(
                {
                    technologies: oldName,
                },
                {
                    $set: {
                        "technologies.$[element]": req.body.name.trim(),
                    },
                },
                {
                    arrayFilters: [
                        {
                            element: oldName,
                        },
                    ],
                }
            );
        }

        return res.status(200).json({
            success: true,
            message: "Skill updated successfully",
            data: skill,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =======================================
// Delete Skill
// =======================================
// export const deleteSkill = async (req, res) => {
//     try {
//         const skill = await skillSchema.findById(req.params.id);

//         if (!skill) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Skill not found",
//             });
//         }

//         if (skill.user.toString() !== req.userId) {
//             return res.status(403).json({
//                 success: false,
//                 message: "Unauthorized",
//             });
//         }

//         if (skill.icon) {
//             const publicId = skill.icon
//                 .split("/")
//                 .slice(-2)
//                 .join("/")
//                 .split(".")[0];

//             await cloudinary.uploader.destroy(publicId);
//         }

//         await skill.deleteOne();

//         return res.status(200).json({
//             success: true,
//             message: "Skill deleted successfully",
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };


export const deleteSkill = async (req, res) => {
    try {
        const skill = await skillSchema.findById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found",
            });
        }

        if (skill.user.toString() !== req.userId) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized",
            });
        }

        // Delete icon from Cloudinary
        if (skill.icon) {
            const publicId = skill.icon
                .split("/")
                .slice(-2)
                .join("/")
                .split(".")[0];

            await cloudinary.uploader.destroy(publicId);
        }

        // Remove skill from all projects
        await Project.updateMany(
            {},
            {
                $pull: {
                    technologies: skill.name,
                },
            }
        );

        // Delete skill
        await skill.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Skill deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =======================================
// Toggle Featured
// =======================================
export const toggleFeaturedSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found",
            });
        }

        skill.featured = !skill.featured;

        await skill.save();

        return res.status(200).json({
            success: true,
            message: "Featured status updated",
            data: skill,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =======================================
// Search Skills
// =======================================
export const searchSkill = async (req, res) => {
    try {
        const keyword = req.query.search || "";

        const skills = await Skill.find({
            name: {
                $regex: keyword,
                $options: "i",
            },
        });

        return res.status(200).json({
            success: true,
            data: skills,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};