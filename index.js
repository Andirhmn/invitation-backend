import express from "express";
import cors from "cors";

import GuestRoute from "./routes/GuestRoute.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(GuestRoute, UserRoute);

app.listen(5000, () => console.log('Server up and running . . .'));
