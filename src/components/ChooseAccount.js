import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Example from './Modal'
import {Container, Col, Row,  Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'


function ChooseAccount({ direction, ...args }) {
        //using useState hook to help functionality of "user has no account" modal
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const toggle = () => setDropdownOpen((prevState) => !prevState);
        //using useState to help functionality of "send money" modal
        const [modal, setModal] = useState(false);
        const toggleModal = () => setModal(!modal);
        //using useNavigate hook to create a function that will navigate to another page
        const navigate = useNavigate();
        const navigateStandardTransfer = () => {
        // 👇️ navigate to /
        navigate('/standardtransfer');
      };

    return(
        <div style={{backgroundColor: "black"}} >
        
        <Container className='choose-account-container'>
            <Row className='box-header'>
                Send Money
            </Row>
            <Row>
                <Col>
                        <div className="d-flex p-3">
                            <Dropdown inNavbar isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                                <DropdownToggle caret size="lg">Choose an Account</DropdownToggle>
                                <DropdownMenu {...args}>
                                <DropdownItem>Checking **********7653</DropdownItem>
                                <DropdownItem>Savings ***********9754</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Add New Account</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                         </div>
                        
                </Col>
               
               
                <Col>
                <div style={{margin:"1rem"}} onClick={toggleModal}>
                    <input placeholder="Search recipients"/>
                    <Modal isOpen={modal} toggleModal={toggleModal} {...args}>
                        
                        <ModalBody>
                        This user does not yet have a WU+ account. Send them a link to create an account and input their banking information?
                        </ModalBody>
                        <ModalFooter>
                        <Button color="warning" onClick={toggleModal}>
                            Send sign-up link through text
                        </Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>
                            Cancel
                        </Button>
                        </ModalFooter>
                    </Modal>
                </div>
                {/* <div style={{margin:"1rem"}}>
                <input placeholder="Search Users"/>
                </div> */}
                </Col>
            </Row>
            <Row>
                <Col className='offset-3'>
                <Button style={{margin: "2rem"}}size="sm" onClick={navigateStandardTransfer}>
                    Go to Standard Money Transfer
                </Button>
                </Col>
               
            </Row>
           

        </Container>
        
        
        </div>
    )
}

export default ChooseAccount;