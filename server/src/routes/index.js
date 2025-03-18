import { Router } from "express";
import {
  createStudentController,
  uploadStudentImagesController,
} from "../controllers";
import upload from "../config/multer";

const router = Router();

router.post("/student/create", createStudentController);
router.post(
  "/student/:id/upload",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "idCardFront", maxCount: 1 },
    { name: "idCardBack", maxCount: 1 },
  ]),
  uploadStudentImagesController
);

export default router;
