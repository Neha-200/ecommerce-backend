import mongoose from "mongoose";
const schema = new mongoose.Schema({
    code: {
        type: String,
        require: [true, "Please enter the Coupon Code"],
        unique: true,
    },
    amount: {
        type: Number,
        require: [true, "Please enter the Discount Amount Code"],
    },
});
export const Coupon = mongoose.model("Coupon", schema);
