import mongoose from "mongoose";

const NewProfileSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fullName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", NewProfileSchema);

export default Profile;
