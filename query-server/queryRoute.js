import { Router } from "express";

const router = Router()

const post = []

console.log("Posts in the", post)

router.get("/get", (req, res) => {
    return res.status(200).json({
        success: "true",
        message: "Succesfull fetched the data",
        data: post
    })
})
router.post("/", (req, res) => {
    console.log("events query trigger", post)
    const {type, data} = req.body

    if(type === "postCreated"){
        console.log(data)
        const {id, title} = data
        post.push({id, title, comments: []})
    }

if (type === "CommentModerated") {
  const { id, comment_id, comment, status } = data;

  post.forEach((p) => {
    if (p.id === id) {
      if (!p.comments) p.comments = [];

      const existing = p.comments.find((c) => c.comment_id === comment_id);

      if (existing) {
        // Comment already exists — just update the status
        existing.status = status;
      } else {
        // CommentCreated hasn't arrived yet — upsert it
        p.comments.push({ comment_id, comment, status });
      }
    }
  });
}


    if (type === "CommentCreated") {
  const { id, comment_id, comment, status } = data;

  post.forEach((p) => {
    if (p.id === id) {
      const existing = p.comments.find((c) => c.comment_id === comment_id);

      if (!existing) {
        // Only push if not already inserted by CommentModerated
        p.comments.push({ comment_id, comment, status });
      }
      // If it exists, CommentModerated already upserted it — do nothing
    }
  });
}

    return res.send({ status: "OK" });
    // console.log(post)
})

export default router;