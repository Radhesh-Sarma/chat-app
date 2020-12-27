
import React, { useRef, useState } from "react";
import {Container,Form,Button, Jumbotron,Alert} from 'react-bootstrap'
import {Link ,Redirect, useHistory} from 'react-router-dom';
import { GoogleLoginButton} from "react-social-login-buttons";
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login,currentUser,loginWithGoogle} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    if(currentUser)
    {
        return <Redirect to="/dashboard" />;
    }
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/dashboard")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }

      async function handleGoogleLogin(e) {
        try {
          setError("");
          setLoading(true);
          await loginWithGoogle();
          history.push("/dashboard");
        } catch (err) {
          setError("Failed to log in");
        }
    
        setLoading(false);
      }


    return (
        <div>
            {/* Login form using react bootstrap https://react-bootstrap.netlify.app/components/forms/ */}
            <Container>
                <Jumbotron className = "mt-5"> 
                    <h1 className = "mb-4">Login</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className = "text-left" controlId="formBasicEmail">
                            <Form.Label><h3>Email Address</h3></Form.Label>
                            <Form.Control size = "lg" type = "email" placeholder="Email" ref = {emailRef} required/>
                        </Form.Group>

                        <Form.Group className = "text-left" controlId="formBasicPassword">
                            <Form.Label><h3>Password</h3></Form.Label>
                            <Form.Control size = "lg" type = "password" placeholder="Password" ref = {passwordRef} required/>
                        </Form.Group>

                        <Button className = "mt-4" size = "lg" variant="primary" loading = {loading} type="submit">
                            Login with Email
                        </Button>

                    </Form>
                    <GoogleLoginButton disabled={loading}
            type="Submit"
            onClick={handleGoogleLogin}>
                     Student Login with Google
                    </GoogleLoginButton>
                    <div className = "w-100 mt-4">
                       <h3>Want an account ? <Link to="/signup">Sign Up</Link></h3> 
                    </div>
                    <div className = "w-100 mt-4">
                       <h3>Forgot Password ? <Link to="/forgotPassword">Click Here</Link></h3> 
                    </div>
                </Jumbotron>
            </Container>             
        </div>
    )
}
