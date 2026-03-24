import express from "express"
import router from "./EventComponent.js"

const app = express()
const port = 4005

app.use(express.json())
app.use('/events', router)

app.listen(4005, () => {
    console.log(`Listening on port: ${port}`)
})