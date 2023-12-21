const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require('path');

//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');


connectDB();

//rest objecct
const app = express();



//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);


const __dirname1 = path.resolve()
if(process.env.NODE_ENV === 'production'){
      app.use(express.static(path.join(__dirname1, "/client/build")));
    
   app.get("/", (req, res) => {
       res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
   });
}

else
{
    app.get('/', (req, res) => {
         res.send("API Is Running Successfully");
    });
}




const port = process.env.port || 8080;


app.listen(port, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} port ${port}`);
});




