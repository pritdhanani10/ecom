import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

// Controller function for Placing order using COD method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address, paymentMethod} = req.body 

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod,
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success: true, message: "Order Placed"})
    } catch (error) {
       console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Controller function for Placing order using Stripe method
const placeOrderStripe = async (req, res) => {
    
}

// Controller function for getting all orders data for Admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Controller function for getting user orders for frontend
const userOrders = async (req, res) => {
   try {
    const {userId} = req.body
    const orders = await orderModel.find({ userId })
    res.json({ success: true, orders})
   } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message})
   } 
}

// Controller function for upating order status for Admin panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Controller function for verify stripe
const verifyStripe = async (req, res) => {
    
}

export {placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe}