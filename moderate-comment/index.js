import express from "express"
import cors from "cors"
import router from "./route/moderateCommentRoute.js"

const app = express()
const port = 4004

app.use(express.json())
app.use(cors())

app.use("/events", router)

// app.use("/events", (req, res) => {
//     console.log("I am reaching here")
// })


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})