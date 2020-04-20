const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Welcome to INK" }));

//Define routes
app.use("/api/user", require("./routes/user"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
