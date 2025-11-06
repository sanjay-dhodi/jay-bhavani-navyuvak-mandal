const express = require("express");
const app = express();
require("./config/mongoConnection");

const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const homepageRoutes = require("./routes/homepage.routes");
const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");

app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", homepageRoutes);
app.use("/api", adminRoutes);

app.listen(3000, () => {
  console.log("server started on 3000");
});
