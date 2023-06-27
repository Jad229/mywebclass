import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("connected to db");
    })
    .catch(() => {
      console.log("not connected to db");
    });
};

export default dbConnect;
