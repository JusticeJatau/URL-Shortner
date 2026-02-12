import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
    {
        token:{
            type: String,
            required: true,
        },
        Url: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Url',
            required: true
        },
        clicks: {
            type: Number,
            default: 0
        }
    },
  {
    timestamps: true, // creates createdAt + updatedAt
  }
);

// Optional index (only if you query by userId often)
tokenSchema.index({ userId: 1 });

const Token = mongoose.model("token", tokenSchema);
export default Token;
