import { useState, useEffect } from "react"

export const CommentList = ({ postId, comment }) => {

    useEffect(() => {
        console.log("comment", comment)
    }, [])

    const renderComment = (com) => {
        if (com.status === "approved") {
            return <li className="text-green-600">{com.comment}</li>
        } else if (com.status === "pending") {
            return <p className="text-yellow-500 text-sm">⏳ Processing...</p>
        } else if (com.status === "rejected") {
            return <p className="text-red-500 text-sm">❌ Sorry, this comment cannot be displayed.</p>
        }
    }

    return (
        <ul className="mt-2 flex flex-col gap-2">
            {comment && comment.map((com) => (
                <div key={com.comment_id}>
                    {renderComment(com)}
                </div>
            ))}
        </ul>
    )
}