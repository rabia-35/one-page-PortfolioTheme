import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

function About() {
  return (
    <div className='about'>
        <Container className='justify-content-center'>
          <h1>ABOUT US</h1>
          <div className='text-muted text-center'><p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <Container className='ms-5'>
            <Row xs={3} className="about-row">
                <Col className='text-end' >
                <h5>July 2019</h5>
                <h6>Lorem ipsum</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo accusantium quibusdam.</p>
                </Col>
                <Col className="text-center " >
                <img src='https://picsum.photos/id/1048/150' alt='about us görseli' />
                </Col>
            </Row>
            <Row xs={3} className="about-row">
                <Col xs={{ span: 4 , offset: 4 }} className="text-center">
                <img src='https://picsum.photos/id/101/150'  alt='about us görseli' />
                </Col>
                <Col className='text-start'>
                <h5>Octember 2019</h5>
                <h6>Lorem ipsum</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo accusantium quibusdam.</p>
                </Col>
            </Row>
            <Row xs={3} className="about-row">
                <Col className='text-end'>
                <h5>May 2020</h5>
                <h6>Lorem ipsum</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo accusantium quibusdam.</p>
                </Col>
                <Col className="text-center">
                <img src='https://picsum.photos/id/278/150'  alt='about us görseli' />
                </Col>
            </Row>
            <Row xs={3} className="about-row">
                <Col xs={{ span: 4, offset: 4 }} className="text-center">
                <img src='https://picsum.photos/id/277/150'  alt='about us görseli' />
                </Col>
                <Col className='text-start'>
                <h5>November 2021</h5>
                <h6>Lorem ipsum</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo accusantium quibusdam.</p>
                </Col>
            </Row>
            <Row xs={3} className="about-row">
              <Col className="about-more" xs={{ span: 4, offset: 4 }} >Our story continues</Col>
            </Row>
            </Container>
        </Container>
    </div>
  )
}

export default React.memo(About)