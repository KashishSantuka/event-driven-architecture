import express from "express"
import postRoute from "./routes/postRoute.js"
import cors from "cors"

const app = express()
const port = 4000

app.use(cors())
app.use(express.json());
app.use("/posts", postRoute)
app.post("/events", (req, res) => {
    const { type, data } = req.body;

    console.log("Event Received:", type);

    res.status(200).send({});
});

app.listen(port, () => {
    console.log(`Listening on post-terminal on port: ${port}`)
})