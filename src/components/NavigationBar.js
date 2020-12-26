import React from 'react'
import {Navbar,Form,Button} from 'react-bootstrap'
export default function NavigationBar() {
    return (
        <div>
            {/* Sample Navbar from react bootstrap */}
            <Navbar expand="lg">
            <Navbar.Brand href="/home"><h3>Chat App</h3></Navbar.Brand>
            <Form inline className="justify-content-end" style={{ width: "100%" }}>
                <Button size="lg" className = "mr-2" href = "/login" variant = "primary">Login</Button>
                <Button size="lg" className = "ml-2" href = "/signup" variant = "primary">Signup</Button>
            </Form>
            </Navbar>
        </div>
    )
}
