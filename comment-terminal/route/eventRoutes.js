import { Router } from "express";
import { comments } from "../commentData.js";
const router = Router()



router.post("/", (req, res) => {
    console.log("In event comment")
  const { type, data } = req.body;
   
 if (type === "CommentModerated") {
  const { comment_id, status } = data;

  comments.forEach((c) => {
    if (c.comment_id === comment_id) {
      c.status = status; // 🔥 update
    }
  });

  console.log("Comments in evenTRoute", comments)
}
   
  console.log("Event received:", type);

  res.status(200).send({});
});

export default router