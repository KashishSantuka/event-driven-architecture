import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import axios from "axios"

const router = Router();

const post = [];

// ✅ GET all posts
router.get("/get", (req, res) => {
  try {
    return res.status(200).json(post); // 🔥 return array directly
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Some error occurred in the server",
      error
    });
  }
});

// ✅ CREATE post
router.post("/save", async(req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required"
      });
    }

    const newData = {
      id: uuidv4(), // 🔥 better naming
      title
    };

    post.push(newData);

    console.log("New data for post terminal:", newData)

    const response = await axios.post("http://localhost:4005/events", {
      type: "postCreated",
      data: newData
    })

    console.log("Response in post terminal", response.data)

    return res.status(201).json(newData); // 🔥 return only new post
  } catch (error) {
    console.log("error in saving the post", error);
    return res.status(500).json({
      success: false,
      message: "Some error occurred in the server",
      error
    });
  }
});



export default router;