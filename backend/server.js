import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // Explicit dotenv import
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
import contactRouter from "./routes/contactRouter.js";
import Stripe from "stripe";


// Load environment variables
dotenv.config();

// Debug: Check if Stripe key is loaded
if (!process.env.STRIPE_SECRET_KEY) {
    console.error("❌ STRIPE_SECRET_KEY is missing from .env file");
    process.exit(1); // Stop server if Stripe key is missing
}

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Database connections with error handling
connectDB().catch(err => console.error('MongoDB connection error:', err));
connectCloudinary().catch(err => console.error('Cloudinary connection error:', err));

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/review', reviewRouter);
app.use("/api/contact", contactRouter);

// Stripe Payment Route
app.post("/api/payment/create-payment-intent", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        if (!amount || !currency) {
            return res.status(400).json({ error: "Amount and currency are required." });
        }

        console.log(`🟢 Creating PaymentIntent: Amount: ${amount}, Currency: ${currency}`);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency,
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("❌ Stripe Payment Error:", error);
        res.status(500).json({ error: error.message });
    }
});

// Root Route
app.get('/', (req, res) => {
    res.send("✅ API is working");
});

// Start server with error handling
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${port} is already in use. Try a different port.`);
    } else {
        console.error('❌ Error starting server:', err);
    }
});
