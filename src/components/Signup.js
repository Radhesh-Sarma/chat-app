import React, { useRef, useState } from "react";
import {Container,Form,Button, Jumbotron,Alert} from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nameRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
   
    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(nameRef.current.value,emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch(e) {
            console.log(e)
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

    return (
        <div>
            {/* Signup form using react bootstrap https://react-bootstrap.netlify.app/components/forms/ */}
            <Container>
                <Jumbotron className = "mt-5"> 
                    <h1 className = "mb-4">Sign Up</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className = "text-left" controlId="formBasicName">
                            <Form.Label><h3>Name</h3></Form.Label>
                            <Form.Control size = "lg" type = "text" placeholder="Name" ref = {nameRef} required/>
                        </Form.Group>
                        
                        <Form.Group className = "text-left" controlId="formBasicEmail">
                            <Form.Label><h3>Email Address</h3></Form.Label>
                            <Form.Control size = "lg" type = "email" placeholder="Email" ref = {emailRef} required/>
                        </Form.Group>

                        <Form.Group className = "text-left" controlId="formBasicPassword">
                            <Form.Label><h3>Password</h3></Form.Label>
                            <Form.Control size = "lg" type = "password" placeholder="Password" ref = {passwordRef} required/>
                        </Form.Group>

                        
                        <Form.Group className = "text-left" controlId="formConfirmBasicPassword">
                            <Form.Label><h3>Confirm Password</h3></Form.Label>
                            <Form.Control size = "lg" type = "password" placeholder="Confirm Password" ref = {passwordConfirmRef} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check name = "radiogroup" id = "one" type="radio" label="Student" />
                            <Form.Check name = "radiogroup" id = "two" type="radio" label="Tutor" />
                        </Form.Group>
                        <Button className = "mt-4" size = "lg" variant="primary" loading = {loading} type="submit">
                            Sign Up with Email
                        </Button>
                    </Form>
                    <div className = "w-100 mt-4">
                       <h3>Already have an account ? <Link to="/login">Log In</Link></h3> 
                    </div>
                </Jumbotron>
            </Container>    
        </div>
    )
}
