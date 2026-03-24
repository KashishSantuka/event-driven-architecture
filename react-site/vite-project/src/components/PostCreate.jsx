import { useState, useEffect} from "react"
import axios from "axios"

const PostCreate = ({setPosts}) => {

     
    const [title, setTitle] = useState(""); 
    // const []

   
    const handleSubmitPost = async(e) => {
      e.preventDefault();
        try {
       const response = await axios.post("http://localhost:4000/posts/save", {
        title: title
      })

      if(!response) {
        console.log("Some error occured while fetching the data")
      }

      setTitle("")

        setPosts((prev) => [...prev, response.data]);

        


        } catch(error) {
            console.log("Some error occured:", error)
        }
    
    }

    const onChangeHandler = (e) => {
         setTitle(e)
        //  setTitle("") 
    }
return (
   <div className="max-w-md mt-6 p-6 bg-white border border-gray-200 rounded-xl shadow-md">
  <form onSubmit={handleSubmitPost} className="flex flex-col gap-4">
    
    <label className="text-gray-700 font-medium">Title</label>
    
    <input 
      className="border border-black-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-400"
      value={title}
      onChange={(e) => onChangeHandler(e.target.value)} 
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

export default PostCreate