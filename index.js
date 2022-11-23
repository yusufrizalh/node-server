/*
    # Membuat web server dengan Express
      > express
      > body-parser
*/

import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users_route.js";

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
