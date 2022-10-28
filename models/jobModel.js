import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    contactInfo: {
      email: { type: String },
      fullName: { type: String },
      phone: { type: Number },
    },
    jobUrl: {
      type: String,
    },
    payout: {
      type: NumberDecimal,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default mongoose.models.Job || mongoose.model("Job", jobSchema);
