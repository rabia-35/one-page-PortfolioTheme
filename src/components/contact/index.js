import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
  return (
    <div className='contact'>
        <Container>
        <h1>CONTACT US</h1>
            <div className='text-muted text-center'><p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <Row xs={2}>
                <Col>
                <form>
                    <input type="text" placeholder='YOUR NAME*' name="name"  />
                    <input type="email" placeholder='YOUR E-MAİL*' name="email"  />
                    <input  type="text" placeholder='SUBJECT*' name="subject" />
                </form>
                </Col>
                <Col>
                <textarea type="text" placeholder='YOUR MESSAGE*' name='message' />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                <button>SEND MESSAGE</button>
                </Col>
            </Row>

        </Container>
    </div>
  )
}

export default React.memo(Contact)