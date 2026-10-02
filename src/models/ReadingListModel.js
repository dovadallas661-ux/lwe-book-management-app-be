import mongoose from "mongoose";

const readingListSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },

    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true
    },

    status: {
      type: String,
      enum: ["reading", "completed", "to-read"],
      default: "to-read",
      required: true
    }
  },
  {
    timestamps: true
  }
);

readingListSchema.index(
  { user: 1, book: 1 },
  { unique: true }
);

const ReadingList = mongoose.model(
  "ReadingList",
  readingListSchema
);

export default ReadingList;