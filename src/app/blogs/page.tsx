"use client"

import axios from 'axios';
import React from 'react';


const BlogsPage = () => {
    const [comments, setComments] = React.useState({
        userName: "",
        comment: ""
    })
    const handleComment = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        const data = await axios.post("/api/comment", comments)
        console.log("from line 15", data.data);


    }

    return (
        <div>
            <form onSubmit={handleComment} className='flex flex-col gap-5 border p-5 rounded'>
                <input type="text" placeholder="Type Your Name" className="input input-bordered w-full max-w-xs" onChange={(event) => setComments({ ...comments, userName: event.target.value })} />
                <textarea className="textarea textarea-primary w-full max-w-xs" placeholder="Type Your Comment" onChange={(event) => setComments({ ...comments, comment: event.target.value })} ></textarea>
                <button className='btn w-full max-w-xs'>Submit</button>
            </form>
        </div>
    );
};

export default BlogsPage;