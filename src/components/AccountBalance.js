import React, { useState } from 'react';
import {Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Toast, ToastBody} from 'reactstrap'
const AccountBalance = (args) => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const closeBtn = (
        <button className="close" onClick={toggleModal} type="button" style={{textAlign: "right"}}>
          &times;
        </button>
      );

    return(
        <div>
            <Container>
              
               <div className='box'>
                <Row><div className='box-text'>@Username_Handle</div></Row>
                <Row><div className='box-text' style={{fontSize: "4rem"}}>$350</div></Row>
                <Row><div className='box-text' style={{fontSize: "1.75rem"}}>in WU</div></Row>
                <Row>
                    <div className='box-text' style={{marginBottom: '3rem'}}>
                    <Button color='light' size='lg' onClick={toggleModal}>
                        Transfer Money to Bank Account
                    </Button>
                    </div>
                </Row>
               </div>

               <div>
                    
                    <Modal isOpen={modal} toggleModal={toggleModal} {...args}>
                    <ModalHeader toggle={toggleModal} close={closeBtn}></ModalHeader>
                        <div className='box'>
                        <ModalBody>
                            <div className='box'>
                            Transfer up to <div style={{fontSize: "3rem"}}>$350.00</div>
                            </div>
                        
                        <Button onClick={toggleModal}>
                            Instant (1.75% fee)
                        </Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>
                            1-3 biz days (no fee)
                        </Button>
                        </ModalBody>
                        <ModalFooter>
                        <div className="my-1 bg-warning rounded">
                            <Toast>
                            <ToastBody>
                                Sending to Checking **********3053
                            </ToastBody>
                            </Toast>
                        </div>
                        </ModalFooter>
                        </div>
                    </Modal>
                </div>
            </Container>
            
           
        </div>
    
    )
}

export default AccountBalance;