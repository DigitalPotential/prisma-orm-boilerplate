import express from "express";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

// Import routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
