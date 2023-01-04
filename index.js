const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index.routes");
const Connect = require("./services/index.service");

dotenv.config({path : "./.env"})
Connect()
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors())
app.use(express.json())
app.use("/api",router)



app.listen(PORT,() => console.log(`Server Runing at locahost:${PORT}`))