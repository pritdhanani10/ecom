import express from "express"
import { addReview } from "../controllers/reviewController.js";
import adminAuth from "../middleware/adminAuth.js";

const reviewRouter = express.Router()

reviewRouter.post('/add', adminAuth, addReview)

export default reviewRouter;