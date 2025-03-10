import express from "express";
import { submitContactForm, getAllContacts} from "../controllers/contactController.js";

const contactRouter = express.Router();

// Route to submit form
contactRouter.post("/submit", submitContactForm);

// Route to get all contacts (Admin)
contactRouter.get("/all", getAllContacts);


export default contactRouter;