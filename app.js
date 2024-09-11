import express from "express";
import {dirname} from 'path';
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3003;

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

// mongoose.connect()
// .then(console.log("Connected to database"))
// .catch((err) => {
//     console.log(err);
// })