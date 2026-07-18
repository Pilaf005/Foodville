import mongoose from "mongoose";

const SequenceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    val: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Sequence =
  mongoose.models.Sequence || mongoose.model("Sequence", SequenceSchema);

export default Sequence;
