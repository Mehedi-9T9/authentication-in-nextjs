'use client'
import axios from 'axios';
import React from 'react';

const RejisterPage = () => {
    const [userData, setUserData] = React.useState({ name: "", email: "", password: "" })

    const handleRejister = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        console.log('form 9', userData);

        const data = axios.post("/api/rejister", userData)
        console.log("from line 13", data);

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Rejister Now!</h1>
                    <p className="py-6 w-1/2 ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleRejister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input type="text" placeholder="Type Your Name" className="input input-bordered" required onChange={(event) => setUserData({ ...userData, name: event.target.value })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Type Your Email" className="input input-bordered" required onChange={(event) => setUserData({ ...userData, email: event.target.value })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Type Your Password" className="input input-bordered" required onChange={(event) => setUserData({ ...userData, password: event.target.value })} />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Rejister</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RejisterPage;