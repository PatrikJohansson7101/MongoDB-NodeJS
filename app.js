const express = require("express"); // Importing express package
const app = express(); // Executing it
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Import routes, connects to the Routes/Posts file so we can use it with middleware.
const postRoute = require("./Routes/posts");

//Middleware
app.use("/posts", postRoute);

// Creating routes
app.get("/", (req, res) => {
    res.send("Landing page"); // Sending a message as a string
});

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        process.env.DB_CONNECTION,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );
} catch (e) {
    console.log("Connection failed!");
}

app.listen(3000);
