const express = require("express");
const fileUpload = require("express-fileupload");
const {config} = require('dotenv');
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

//Connect Database
connectDB();

//Init Cloudinary
cloudinaryUtility.init();

//Init middleware
app.use(express.json({ extended: false }));
app.use(fileUpload());

app.use(cors());

app.get("/", (req, res) => res.json({ msg: "Welcome to INK" }));

//Define routes
app.use("/api/user", require("./routes/user"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
