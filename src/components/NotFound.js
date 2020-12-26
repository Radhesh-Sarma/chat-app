import React from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap'

export default function NotFound() {
    return (
        <div>
            <Container>
                <Jumbotron>
                    <h1>Error 404 : Not Found</h1>
                    <Button href = "/home" size = "lg">Home</Button>
                </Jumbotron>
            </Container>
        </div>
    )
}
