import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import {Redirect} from 'react-router-dom';
export default function UpdateProfile() {
    const { currentUser } = useAuth()
    if(!currentUser)
    {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            <h1>
            UpdateProfile
            </h1>
        </div>
    )
}
