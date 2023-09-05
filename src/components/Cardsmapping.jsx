import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from './Mapdata';


const Cardsmapping = () => {
    return (
        <>
            <Container>
                <Row>
                    {Card.map((data) => {
                        return (
                            <Col key={data.id} lg={3} md={4} sm={6} className='d-flex align-items-center justify-content-center pt-4' >
                                <div className='box'>
                                    <div className=' d-flex align-items-center justify-content-center'>
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className=' d-flex align-items-center justify-content-center'>
                                        <h4 className='open-sans fw-700 fs-20 mb-0 fc-dark'>{data.heading}</h4>
                                    </div>
                                    <div className=' d-flex align-items-center justify-content-center text-center'>
                                        <p className='open-sans fw-400 fs-18 mb-0 fc-dark max-210px'>{data.paragraph}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Cardsmapping