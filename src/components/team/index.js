import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faFacebookF, faPinterestP } from "@fortawesome/free-brands-svg-icons"

function Team() {
  return (
    <div className="team" >
        <Container className='team-content'>
            <h1>OUR AMAZİNG TEAM</h1>
            <div className='text-muted text-center'><p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <Row xs={3} >
                <Col >
                <img  src="https://picsum.photos/id/1011/200"  alt='kimberly görseli'/>
                <h5>Kimberly Thompson</h5>
                <p>Marketer</p>
                <ul>
                    <li> <FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li><FontAwesomeIcon icon={faPinterestP} /></li>
                </ul>
                </Col>
                <Col>
                <img  src="https://picsum.photos/id/177/200"  alt='kimberly görseli'/>
                <h5>Rico Massimo</h5>
                <p>Coder</p>
                <ul>
                    <li> <FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li><FontAwesomeIcon icon={faPinterestP} /></li>
                </ul>
                </Col>
                <Col>
                <img  src="https://picsum.photos/id/338/200"  alt='kimberly görseli'/>
                <h5>Uku Masaon</h5>
                <p>Graphic Designer</p>
                <ul>
                    <li> <FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li><FontAwesomeIcon icon={faPinterestP} /></li>
                </ul>
                </Col>
            </Row>
            <div className='text-muted text-center mt-5' >
            <p>Doloribus omnis minus reprehenderit cumque officiis, perspiciatis fugiat assumenda, delectus distinctio temporibus ex laborum ipsa. Molestiae ullam similique maiores rerum excepturi odit quam laboriosam praesentium ipsam! Commodi ipsum magnam reiciendis?</p>
            </div>
           
        </Container>
    </div>
  )
}

export default React.memo(Team)