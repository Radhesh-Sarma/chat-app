import React ,{useRef,useState}from 'react'
import {Container,Form,Button, Jumbotron} from 'react-bootstrap'
import { Link} from "react-router-dom";
export default function ForgotPassword() {
const [loading, setLoading] = useState(false);
const emailRef = useRef()
    return (
        <div>
            <Container>
                <Jumbotron className = "mt-5"> 
                    <h1 className = "mb-4">Forgot Password</h1>
                    <Form>

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
