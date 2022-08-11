import {Button, Container, Row, Col} from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
    const navigate = useNavigate();
    const navigateQuickTransfer = () => {
        // 👇️ navigate to /
        navigate('/quicktransfer');
      };
      const navigateStandardTransfer = () => {
        // 👇️ navigate to /
        navigate('/standardtransfer');
      };
    return(
        <Container>
            <Row>
                <Col className='md-4' >
                    <div className='body-component'>
                    <Button type='submit' className='button' onClick={navigateQuickTransfer}>Quick Transfer</Button>
                    </div>
                </Col>
                <Col className='md-4'>
                    <div className='body-component'>
                        <Button type='submit' className='button' onClick={navigateStandardTransfer} >Standard Transfer</Button>
                    </div>
                </Col>
                <Col className='md-4'>
                </Col>
            </Row>
        </Container>
    
    )
}

export default Buttons;