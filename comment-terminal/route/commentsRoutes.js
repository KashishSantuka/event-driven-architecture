import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import { comments } from "../commentData.js";

const router = Router()

// const comments = []

router.get("/get/:id", (req, res) => {

    const getData = []
    const id = req.params.id

    comments.map((com) => {
        if(com.id === id) {
           getData.push(com)
        }
    })

    return res.status(200).json(getData)
})

router.post("/post/:id", async(req, res) => {
    console.log("Hello World")

    try {
 const id = req.params.id
     const {comment} =  req.body

     if (!comment) {
  return res.status(400).json({
    status: "false",
    message: "Comment is required"
  });
}

      const newData = {
        comment_id: uuidv4(),
        id,
        comment,
        status: "pending",
     }

      

   
     comments.push(newData)

     console.log("Comment in comment terminal", comments)

     await axios.post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: newData
     })
      return res.status(201).json({
        status: "true",
        message: "Succesfully the data is saved",
        data: newData
      })
      
    } catch(error) {
        res.status(500).json({
            status: "false",
            message: "Some error occured while saving the data",
            error: error
        })
    }
   } )

//    router.post("/", (req, res) => {
//     console.log("In event comment")
//   const { type, data } = req.body;

   
//   console.log("Event received:", type);

//   res.status(200).send({});
// });

export default router