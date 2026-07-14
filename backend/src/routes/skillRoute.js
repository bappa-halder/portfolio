import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

import {
    addSkill,
    getAllSkills,
    getFeaturedSkills,
    getOneSkill,
    updateSkill,
    deleteSkill,
    toggleFeaturedSkill,
    searchSkill,
} from "../controllers/skillController.js";
import upload from "../middleware/multer.js";

const skillRoute = express.Router();

skillRoute.post("/addSkill", authMiddleware, upload.single("icon"), addSkill);

skillRoute.get("/getAllSkill", getAllSkills);

skillRoute.get("/getFeaturedSkill", getFeaturedSkills);

skillRoute.get("/skillSearch", searchSkill);

skillRoute.get("/getOneSkill/:id", getOneSkill);

skillRoute.put("/updateSkill/:id", authMiddleware, upload.single("icon"), updateSkill);

skillRoute.patch("/toggleFeatured/:id/featured", authMiddleware, toggleFeaturedSkill);

skillRoute.delete("/deleteSkill/:id", authMiddleware, deleteSkill);

export default skillRoute;