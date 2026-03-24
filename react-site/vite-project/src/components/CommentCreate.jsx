import { useEffect, useState } from "react"
import axios from "axios"

export const CommentCreate = ({postId, setPosts}) => {
    const [comment, setComment] = useState([])

    const onSubmit = async(e) => {
      e.preventDefault();
        try {
        const response = await axios.post(`http://localhost:3000/comments/post/${postId}`, {
          comment : comment
        })

        console.log("Responsegfthg", response)
           const newComment = response.data.data;

      // ✅ update state properly
      setPosts((prevPosts) =>
        prevPosts.map((p) => {
          if (p.id === postId) {
            return {
              ...p,
              comments: [...(p.comments || []), newComment],
            };
          }
          return p;
        })
      );

      setComment("")

        
        } catch(error) {
            console.log("Error", error)
        }
    }
   
return (
  <div className="flex flex-col mt-3">
  <form onSubmit={onSubmit} className="flex flex-col gap-2">
    
    <label className="font-medium">
      New Comment
    </label>

    <input 
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      className="border border-gray-300 rounded-md p-2"
    />

    <button 
      type="submit"
      className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
    >
      Submit
    </button>

  </form>
</div>
)
}