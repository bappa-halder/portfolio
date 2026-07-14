import express from "express";
import upload from "../middleware/multer.js";

import {
    addProject,
    deleteProject,
    getAllProject,
    getFeaturedProject,
    getFeaturedSkills,
    getOneProject,
    updateProject,
} from "../controllers/projectController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const projectRoute = express.Router();

//
// 🟢 PUBLIC ROUTES
//

projectRoute.get("/getAllProject", getAllProject);
projectRoute.get("/getFeaturedProject", getFeaturedProject);
projectRoute.get("/getOneProject/:id", getOneProject);
projectRoute.get("/featured-skills", getFeaturedSkills);

//
// 🔐 PROTECTED ROUTES (LOGIN REQUIRED)
//

projectRoute.post(
    "/addProject",
    authMiddleware,
    upload.single("image"),
    addProject
);

projectRoute.put(
    "/updateProject/:id",
    authMiddleware,
    upload.single("image"),
    updateProject
);

projectRoute.delete(
    "/deleteProject/:id",
    authMiddleware,
    deleteProject
);

export default projectRoute;