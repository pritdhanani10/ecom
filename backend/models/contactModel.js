import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    topic: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const contactModel = mongoose.models.contact || mongoose.model('contact', contactSchema);

export default contactModel;
