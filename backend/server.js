const express = require("express");
const app = express();
const cors = require("cors");
require("./config/mongoConnection");
const helmet = require("helmet");

const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const homepageRoutes = require("./routes/homepage.routes");
const adminRoutes = require("./routes/admin.routes");
// const userRoutes = require("./routes/user.routes");

const allowedOrigins = [
  process.env.LOCAL_ORIGIN,
  process.env.PRODUCTION_ORIGIN,
];

app.use(helmet());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoutes);
// app.use("/api", userRoutes);
app.use("/api", homepageRoutes);
app.use("/api", adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server started ");
});
