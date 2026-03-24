import express from 'express';
// import postRoute from './route/postRoute.js';
import commentsRoutes from './route/commentsRoutes.js';
import eventRoutes from './route/eventRoutes.js';
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

// app.use("/post", postRoute)
app.use("/comments", commentsRoutes)
app.use("/events", eventRoutes)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})