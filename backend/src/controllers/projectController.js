import projectSchema from "../models/projectSchema.js";
import cloudinary from "../config/cloudinary.js";
import skillSchema from "../models/skillSchema.js";

export const addProject = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    let image = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "projects",
      });

      image = result.secure_url;
    }

    const {
      title,
      description,
      technologies,
      github,
      live,
      featured,
    } = req.body;

    const technologyList = Array.isArray(technologies)
      ? technologies
      : technologies?.split(",").map((t) => t.trim());

    for (const tech of technologyList) {
      const exists = await skillSchema.findOne({
        name: { $regex: new RegExp(`^${tech}$`, "i") },
      });

      if (!exists) {
        await skillSchema.create({
          user: userId,
          name: tech,
          featured: false,
          category: "Other",
          icon: "",
        });
      }
    }
    const project = await projectSchema.create({
      user: userId,
      title,
      description,
      technologies: Array.isArray(technologies)
        ? technologies
        : technologies?.split(",").map((t) => t.trim()),
      github,
      live,
      featured: featured === "true" || featured === true,
      image,
    });

    return res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all projects
export const getAllProject = async (req, res) => {
  try {
    const projects = await projectSchema
      .find()
      .sort({ createdAt: -1 })
      .populate("user", "userName email");

    return res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get featured projects
export const getFeaturedProject = async (req, res) => {
  try {
    const projects = await projectSchema
      .find({ featured: true })
      .sort({ createdAt: -1 })
      .populate("user", "userName email");

    return res.status(200).json({
      success: true,
      message: "Featured projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOneProject = async (req, res) => {
  try {
    const project = await projectSchema
      .findById(req.params.id)
      .populate("user", "userName email");

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await projectSchema.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // 🔐 ownership check
    if (project.user.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: not your project",
      });
    }

    let image = project.image;

    if (req.file) {
      if (project.image) {
        const publicId = project.image
          .split("/")
          .slice(-2)
          .join("/")
          .split(".")[0];

        await cloudinary.uploader.destroy(publicId);
      }

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "projects",
      });

      image = result.secure_url;
    }

    const technologyList = req.body.technologies
      ? Array.isArray(req.body.technologies)
        ? req.body.technologies
        : req.body.technologies.split(",").map((t) => t.trim())
      : project.technologies;

    for (const tech of technologyList) {
      const exists = await Skill.findOne({
        name: { $regex: new RegExp(`^${tech}$`, "i") },
      });

      if (!exists) {
        await Skill.create({
          user: req.userId,
          name: tech,
          featured: false,
          category: "Other",
        });
      }
    }
    project.technologies = technologyList;

    project.title = req.body.title ?? project.title;
    project.description = req.body.description ?? project.description;
    project.technologies =
      req.body.technologies
        ? Array.isArray(req.body.technologies)
          ? req.body.technologies
          : req.body.technologies.split(",").map((t) => t.trim())
        : project.technologies;

    project.github = req.body.github ?? project.github;
    project.live = req.body.live ?? project.live;

    if (req.body.featured !== undefined) {
      project.featured =
        req.body.featured === "true" || req.body.featured === true;
    }

    project.image = image;

    await project.save();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await projectSchema.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // 🔐 ownership check
    if (project.user.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: not your project",
      });
    }

    if (project.image) {
      const publicId = project.image
        .split("/")
        .slice(-2)
        .join("/")
        .split(".")[0];

      await cloudinary.uploader.destroy(publicId);
    }

    await project.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeaturedSkills = async (req, res) => {
  try {
    const projects = await projectSchema.find({ featured: true });

    const skills = projects.flatMap(
      (p) => p.technologies || []
    );

    const uniqueSkills = [...new Set(skills.filter(Boolean))];

    return res.status(200).json({
      success: true,
      message: "Featured skills fetched successfully",
      data: uniqueSkills,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

