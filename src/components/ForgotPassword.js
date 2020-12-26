import React ,{useRef,useState}from 'react'
import {Container,Form,Button, Jumbotron,Alert} from 'react-bootstrap'
import { Link} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setMessage("")
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password")
        }
    
        setLoading(false)
      }

    return (
        <div>
            <Container>
                <Jumbotron className = "mt-5"> 
                    <h1 className = "mb-4">Forgot Password</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className = "text-left" controlId="formBasicEmail">
                            <Form.Label><h3>Email Address</h3></Form.Label>
                            <Form.Control size = "lg" type = "email" placeholder="Email" ref = {emailRef} required/>
                        </Form.Group>

                        <Button className = "mt-4" size = "lg" variant="primary" loading = {loading} type="submit">
                            Reset Password
                        </Button>
                    </Form>
                    <div className = "w-100 mt-4">
                       <h3>Want an account ? <Link to="/signup">Sign Up</Link></h3> 
                    </div>
                </Jumbotron>
            </Container>     
        </div>
    )
}
