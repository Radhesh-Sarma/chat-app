import React from 'react'
import {Navbar,Form,Button,Nav} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {Link ,Redirect, useHistory} from 'react-router-dom';
export default function NavigationBar() {
    const { currentUser ,logout} = useAuth()
    let displayName

    if(currentUser)
    {
        let displayName = currentUser.displayName;
        if(!displayName)displayName = currentUser.email
    }

    const history = useHistory()
    async function handleLogout(e) {
        e.preventDefault()
    

        try {
          await logout()
          history.push("/login")
        } catch {
        }
      }

    return (
        <div>
            {/* Sample Navbar from react bootstrap */}
            <Navbar expand="lg">
            <Navbar.Brand href="/home"><h3>Tutor Samvad</h3></Navbar.Brand>
            <Nav.Link>{currentUser && <h3>Welcome {displayName}</h3>}</Nav.Link>
            <Form inline className="justify-content-end" style={{ width: "100%" }}>
               {!currentUser && <Button size="lg" className = "mr-2" href = "/login" variant = "primary">Login</Button>}
                {!currentUser && <Button size="lg" className = "ml-2" href = "/signup" variant = "primary">Signup</Button>}
                {currentUser && <Button size="lg" className = "ml-2" onClick = {handleLogout} variant = "primary">Signout</Button>}
            </Form>
            </Navbar>
        </div>
    )
}
