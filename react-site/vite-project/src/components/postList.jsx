import { useState, useEffect } from "react"
import axios from "axios"
import { CommentCreate } from "./CommentCreate"
import { CommentList } from "./CommentList"


export const PostList = ({posts, setPosts}) => {

    // const [post, setPost] = useState([])

    //   useEffect(() => {
    //    const fetchPost = async() => {
    //     try {
    //      const response = await axios.get("http://localhost:4002/events/get")
    //         console.log(response)
    //      if(response) {
    //         setPost(response.data.data)
    //      }

    //     } catch(error){
    //         console.log(error)
    //     }
    //    }

    //    fetchPost()
    // }, [])

    console.log("Post", posts)
    posts.map((p) => {console.log("P Comemetss", p.comments)})
    console.log("Just checking")
    return (
       <div className="flex gap-2 p-2 mt-4">
  {posts && posts.map((p) => {
    console.log("Map", p)
    console.log("P comments map", p.comments)
    return (
      <div 
        key={p.id} 
        className="max-w-md mb-4 p-4 border border-gray-200 rounded-xl shadow-md bg-white"
      >
        <h4 className="text-lg font-semibold mb-2">{p.title}</h4>

        <CommentList postId={p.id} comment={p.comments}/>
        <CommentCreate postId={p.id} setPosts={setPosts}/>
      </div>
    );
  })}
</div>
    )
}