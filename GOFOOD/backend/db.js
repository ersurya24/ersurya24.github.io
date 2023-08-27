const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Cluster98976:gofoodmern123@cluster0.dbdizfz.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the database!");

    // Fetch data from the "food_items" collection using toArray() method
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    // console.log("Fetched data:", fetched_data);
    global.food_items = fetched_data;

    // Fetch data from the "foodCategory" collection using toArray() method
    const catData = await mongoose.connection.db.collection("food_category").find({}).toArray();
    // console.log("Fetched food category data:", catData);
    global.food_category = catData;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = mongoDB;

