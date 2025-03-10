import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    userName: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    userImage: { type: String, required: true },
  },
  { minimize: false }
);

const reviewModel = mongoose.models.review || mongoose.model("review", reviewSchema);

export default reviewModel;