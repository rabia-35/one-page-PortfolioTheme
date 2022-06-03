import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook, faPinterest, faGooglePlus} from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <Container className='footer'>
        <Row xs={3}>
            <Col>
            <p>&copy; Copyright 2022 FreebiesXpress.com </p>
            </Col>
            <Col>
            <ul className='footer-icon'>
                <li className='twit-icon'><FontAwesomeIcon  className='fa-2x' icon={faTwitter} /></li>
                <li><FontAwesomeIcon  className='fa-2x' icon={faFacebook} /></li>
                <li> <FontAwesomeIcon  className='fa-2x' icon={faPinterest} /></li>
                <li><FontAwesomeIcon  className='fa-2x' icon={faGooglePlus} /></li>
            </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default React.memo(Footer)