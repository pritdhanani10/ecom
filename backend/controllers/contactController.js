import contactModel from "../models/contactModel.js";

// Submit Contact Form
const submitContactForm = async (req, res) => {
    try {
        const { fullName, email, phone, topic, message } = req.body;

        if (!fullName || !email || !phone || !topic || !message) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const newContact = new contactModel({ fullName, email, phone, topic, message });
        await newContact.save();

        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

// Get All Contact Submissions (Admin Only)
const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Unable to fetch contacts" });
    }
};

export { submitContactForm, getAllContacts };