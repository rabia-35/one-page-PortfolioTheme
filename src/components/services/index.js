import React from 'react'
import {Container, Row, Col } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBasketShopping, faLaptopCode, faLock} from "@fortawesome/free-solid-svg-icons"

function Services() {
       
  return (
        <Container className='services mb-5'>
          <h1>SERVİCES</h1>
          <div className='text-muted fs-smaller'><p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
          <Row xs={1} sm={3} className="services-row">
            <Col>
            <div className='icon'>
            <FontAwesomeIcon className='fa-3x' icon={faBasketShopping}/>
            </div>
                <h5>E-Commerce</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium quibusdam.</p>
            </Col>
            <Col>
            <div className='icon'>
            <FontAwesomeIcon className='fa-3x' icon={faLaptopCode} />
            </div>
            <h5>Responsive Web</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium quibusdam.</p>
            </Col>
            <Col>
            <div className='icon'>
            <FontAwesomeIcon  className='fa-3x' icon={faLock} />
            </div>
            <h5>Web Security</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium quibusdam.</p>
            </Col>
          </Row>
        </Container>

  )
}

export default React.memo(Services)