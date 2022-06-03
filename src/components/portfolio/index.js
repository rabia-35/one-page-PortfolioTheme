import React from 'react'
import {Container, Row, Col, Card } from "react-bootstrap"

function Portfolio() {
  return (
        <div className='portfolio'>
            <Container >
                <h1>OUR PORTFOLIO</h1>
                <div className='text-muted text-center'><p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                <Row xs={1} sm={3}>
                    <Col>
                    <Card className='portfolio-card'>
                        <Card.Img variant="top" src="https://picsum.photos/id/1011/200" />
                        <Card.Body>
                            <Card.Title className='title'>Card Title</Card.Title>
                            <Card.Text className='text-muted'>
                            Lorem ipsum dolor sit
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='portfolio-card'>
                        <Card.Img variant="top" src="https://picsum.photos/id/1010/200" />
                        <Card.Body>
                            <Card.Title className='title'>Card Title</Card.Title>
                            <Card.Text className='text-muted'>
                            Lorem ipsum dolor sit
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='portfolio-card'>
                        <Card.Img variant="top" src="https://picsum.photos/id/1059/200" />
                        <Card.Body>
                            <Card.Title className='title'>Card Title</Card.Title>
                            <Card.Text className='text-muted'>
                            Lorem ipsum dolor sit
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='portfolio-card'>
                        <Card.Img variant="top" src="https://picsum.photos/id/2/200" />
                        <Card.Body>
                            <Card.Title className='title'>Card Title</Card.Title>
                            <Card.Text className='text-muted'>
                            Lorem ipsum dolor sit
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='portfolio-card'>
                        <Card.Img variant="top" src="https://picsum.photos/id/250/200" />
                        <Card.Body>
                            <Card.Title className='title'>Card Title</Card.Title>
                            <Card.Text className='text-muted'>
                            Lorem ipsum dolor sit
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='portfolio-card'>
                        <Card.Img variant="top" src="https://picsum.photos/id/526/200" />
                        <Card.Body>
                            <Card.Title className='title'>Card Title</Card.Title>
                            <Card.Text className='text-muted'>
                            Lorem ipsum dolor sit
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default React.memo(Portfolio)