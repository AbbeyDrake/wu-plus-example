import {Card, CardImg, CardImgOverlay, CardHeader, CardTitle} from 'reactstrap'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, TextArea } from 'reactstrap';
// import WULogo from '../assets/wu.jpeg'


//destructure favorite from props, then destructure favorite.image and favorite.name
function FavoritesCard({favorite}, args){
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const {image, name } = favorite;
    return (
        <div>
        <Card onClick = {toggleModal} style = {{width: "5rem"}}>
            <CardHeader style={{fontSize:".6rem", color: "black"}}>
                {name}
            </CardHeader>
            <CardImg 
                
                src={image}
                alt={name}
            /> 
        </Card>
        <Modal isOpen={modal} toggleModal={toggleModal} {...args}>
         <ModalHeader>Send money to {name}?</ModalHeader>               
        <ModalBody>
        <Form>
                <FormGroup>
                    <Label for="amount">Amount: $</Label>
                    <Input type="number" name="num" id="amount"
                        placeholder="$" />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input type="textarea" name="message" 
                        id="message"
                        placeholder="Message" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="warning" onClick={toggleModal}>
            Send money
        </Button>{' '}
        <Button color="secondary" onClick={toggleModal}>
            Cancel
        </Button>
        </ModalFooter>
        </Modal>
    </div>
    );
}

export default FavoritesCard;