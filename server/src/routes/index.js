import { Router } from "express";
import { createStudent } from "../controllers";

const router = Router();

router.post("/student/create", createStudent);

export default router;
