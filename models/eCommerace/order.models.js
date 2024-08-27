import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemSchema],
    },
    adrrees: {
      type: String,
      required: true,
    },
    status:{
      type:String,
      enum:["PENDING","DILIVERED","CANCELLED"],
      default:"PENDING"
    }
  },
  { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
