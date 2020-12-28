import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import {Redirect} from 'react-router-dom';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import {Row,Col} from 'react-bootstrap'
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
            <Row>

            <Col>
            <ChatList/>
            </Col>
           <Col>
           <ChatWindow/>
           </Col>
            </Row>
        </div>
    )
}
