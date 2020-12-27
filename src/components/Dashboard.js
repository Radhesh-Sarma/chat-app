import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import {Link ,Redirect, useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
export default function Dashboard() {
    const { currentUser } = useAuth()
    if(!currentUser)
    {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            <h1>
            Dashboard
            </h1>
            <ChatList/>
            <ChatWindow/>
        </div>
    )
}
