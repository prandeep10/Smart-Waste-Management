const express = require("express");
const app = express();
const cors = require("cors");
const xss = require("xss-clean");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const { find } = require("./models/smartDustbinModel");
const dustbinRoutes = require("./routes/smartDustbin");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(xss());
app.use(helmet());
app.use(bodyParser.json());

app.use('/api/v1/smartDustbin', dustbinRoutes);

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();