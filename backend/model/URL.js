import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        originalUrl:{
            type: String,
            required: true,
        },
        is_active: {
            type: Boolean,
            default: true,
            required: true
        },
        // userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        // default: null,
        // },
    },
  {
    timestamps: true, // creates createdAt + updatedAt
  }
);

// Optional index (only if you query by userId often)
urlSchema.index({ userId: 1 });

const Url = mongoose.model("Url", urlSchema);
export default Url;
