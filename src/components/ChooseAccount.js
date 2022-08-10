import React, { useState } from 'react';
import {Container, Col, Row, CardBody,  Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,} from 'reactstrap'
import {Card, CardImg, CardImgOverlay, CardHeader, CardTitle} from 'reactstrap'

function ChooseAccount({ direction, ...args }) {
        const [dropdownOpen, setDropdownOpen] = useState(false);
      
        const toggle = () => setDropdownOpen((prevState) => !prevState);
    return(
        <div style={{backgroundColor: "black"}} >
        <Container style={{backgroundColor: "white"}}>
            <Row className='box-header'>
                Send Money
            </Row>
            <Row>
                <Col className='md-4'>
                        <div className="d-flex p-5">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                                <DropdownToggle caret>Choose an Account</DropdownToggle>
                                <DropdownMenu {...args}>
                                <DropdownItem>Checking **********7653</DropdownItem>
                                <DropdownItem>Savings ***********9754</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Add New Account</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                         </div>
                        
                </Col>
            </Row>

        </Container>
       
        
        </div>
    )
}

export default ChooseAccount;