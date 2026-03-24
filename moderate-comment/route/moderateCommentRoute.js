import { Router } from "express";
import axios from "axios"

const router = Router()

// const moderateComment = []


router.post("/", async (req, res) => {
    try{
       console.log("HEllo moderate comment world");

    const { type, data } = req.body;

    console.log("Type of the event", type);
    console.log("data in moderate:", data);

    if (type === "CommentCreated") {

        let status = "approved";

        if (data.comment.toLowerCase().includes("orange")) {
            status = "rejected";
        }

        try {
            await axios.post("http://localhost:4005/events", {
                type: "CommentModerated",
                data: {
                    ...data,
                    status: status
                }
            });
        } catch (error) {
            console.log("Error sending to event bus:", error.message);
        }
    }

    res.send({ status: "OK" });
    } catch(error) {
        console.log("error")
    }
   
});



export default router;