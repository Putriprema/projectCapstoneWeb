const express = require("express");
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const cors = require("cors");
const { createServer } = require("http");
const routes = require("./routes");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const server = createServer(app);

app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(routes);

server.listen(PORT, () => console.log(`Server already running at http://localhost:${PORT}`));