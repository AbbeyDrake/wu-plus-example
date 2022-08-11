
import {Container, Row,Col} from 'reactstrap'
const Welcome = () => {
    return(
        <div>
            <Container>
                <Row>
                <Col>
                    <div className='body-component'>
                        Hi Username
                    </div>
                </Col>
                </Row>
                <Row>
                <Col md='8'>
                  <div className='welcome-text'>
                  Send money 24/7 around the world with Western Union
                  </div>
                  <div className='welcome-text' style={{fontSize: '1.5rem'}}>
                    Choose between the options below for quick and convenient money transfer, or sign into your WU+ digital bank account.
                  </div>
                </Col>
                
                </Row>
            </Container>
            
           
        </div>
    
    )
}

export default Welcome;