import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddComment = () => {

    const [text, setText] = useState("")
    const [characterLeft, setCharacterLeft] = useState(200)

    let { id } = useParams()



    async function addComment(e) {
        await axios.post("http://localhost:5000/addcomment", { text, id })
            .then(res => console.log(res))
            .catch((err) => console.log(err))
    }



    return (
        <div className="bg-red-50 p-8  mt-5 mb-12 rounded-lg shadow-lg space-y-5 ">
            <h1 className="text-2xl font-bold">Add Comment</h1>
            <form onSubmit={addComment} className="flex flex-col space-y-3">
                <textarea maxLength="200" className="bg-blue-100 resize-none rounded-lg h-48 py-3 mb-4 px-5" placeholder="Type your comment here" />
                <div className="flex flex-row">
                    <button type="submit" className="px-5 py-3  hover:bg-blue-900 ml-auto w-24 rounded-lg text-white bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddComment
