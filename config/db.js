const mongoose = require("mongoose");
require('dotenv').config();

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URL);
}

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
