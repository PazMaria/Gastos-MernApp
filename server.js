const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

//Body Parser Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.json({ msg: "welcome" }));

app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));
app.use("/api/expenses", require("./routes/expenses"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
