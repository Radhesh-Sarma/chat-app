import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import {Link ,Redirect, useHistory} from 'react-router-dom';
export default function Home() {
    const { currentUser } = useAuth()
    if(currentUser)
    {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
            <h1>
            Home Page
            </h1>
        </div>
    )
}
