import express from "express"
import cors from "cors"
import queryRoute from "./queryRoute.js"

const app = express()
const port = 4002
app.use(express.json())
app.use(cors())


app.use("/events", queryRoute)

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})