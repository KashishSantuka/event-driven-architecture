import { Router } from "express";
import axios from "axios"

const router = Router()

router.post("/", async (req, res) => {
    const { type, data } = req.body
    const event = { type, data }

    console.log("EventData", event)

    const targets = [
        "http://localhost:3000/events",  // comment
        "http://localhost:4000/events",  // post
        "http://localhost:4002/events",  // query
        "http://localhost:4004/events",  // moderate
    ]

    await Promise.allSettled(
        targets.map(url =>
            axios.post(url, event)
                .then(res => console.log(`✅ ${url}:`, res.data))
                .catch(err => console.log(`❌ ${url}:`, err.message))
        )
    )

    res.send({ status: "OK" })
})


export default router