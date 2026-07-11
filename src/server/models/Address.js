/**
 * Saved delivery address.
 *
 * This unifies the two divergent shapes the frontend had: the checkout flow
 * (name/completeAddress/area + map coordinates, kept in localStorage) and the
 * profile flow (receiverName/houseFlat/state/pincode, in memory). Both sets of
 * fields live here, so either UI can read what it needs.
 */
import mongoose from "mongoose";

const { Schema } = mongoose;

const AddressSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },

    label: { type: String, enum: ["Home", "Work", "Hotel", "Other"], default: "Home" },
    receiverName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },

    houseFlat: { type: String, default: "" }, // "Flat 4B, Green Valley"
    apartment: { type: String, default: "" }, // area / sector
    landmark: { type: String, default: "" },
    city: { type: String, required: true, trim: true },
    state: { type: String, default: "" },
    pincode: { type: String, default: "" },
    deliveryInstructions: { type: String, default: "" },

    // From the Leaflet pin-drop step of the checkout flow.
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },

    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

AddressSchema.index({ user: 1, isDefault: -1 });

const Address = mongoose.models.Address || mongoose.model("Address", AddressSchema);
export default Address;
