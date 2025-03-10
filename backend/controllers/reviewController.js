const addReview = async (req, res) => {
    try {
        const { userId, userName, review, rating, userImage } = req.body

        if(!userId || !userName || !review || !rating || !userImage) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const reviewData = {
            userId,
            userName,
            review,
            rating,
            userImage
        }

        const newReview = new reviewModel(reviewData)
        await newReview.save()

        res.json({ success: true, message: "Review Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addReview };