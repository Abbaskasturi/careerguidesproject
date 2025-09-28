const express = require("express");
const dotEnv = require('dotenv');
const { MongoClient } = require("mongodb");
const cors = require("cors"); 

dotEnv.config();
app.use(cors()); 
const app = express();
app.use(express.json());

const PORT = 5000;
const authRoutes = require("./routes/authRoutes");
const getDataRoutes = require("./routes/getDataRoutes"); 

MongoClient.connect(process.env.MONGO_URL)
    .then(async (client) => {
        console.log("MONGODB CONNECT SUCCESSFULLY");
        const db = client.db(process.env.DB_NAME);
        app.locals.db = db;

        const collections = await db.listCollections().toArray();
        if (!collections.some((each) => each.name === "users")) {
            await db.createCollection("users");
            console.log("users collection successfully created");
        } else {
            console.log("users collection already created");
        }
        app.use("/api/auth", authRoutes);
        app.use("/api", getDataRoutes);  
        app.listen(PORT, () => {
            console.log(`Server running at ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`FAIL TO CONNECT MONGODB: ${error}`);
    });
