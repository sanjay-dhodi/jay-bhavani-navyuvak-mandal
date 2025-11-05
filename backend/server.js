const express = require("express");
const app = express();
require("./config/mongoConnection");
const homepageRoutes = require("./routes/homepage.routes");
const adminRoutes = require("./routes/admin.routes");

app.use(express.json());
app.use("/api", homepageRoutes);
app.use("/api", adminRoutes);

app.listen(3000, () => {
  console.log("server started on 3000");
});
