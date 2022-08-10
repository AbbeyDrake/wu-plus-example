
import FavoritesCard from './FavoritesCard';
import { FAVORITES } from '../shared/favorites';
import {Col, Row} from 'reactstrap'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Receivers(args){
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    return(
        <div >
        <div className="category-header" >
             <span>Favorite Receivers</span>
        </div>
        <Row className= 'ms-auto body-component'>
            {FAVORITES.map((favorite)=>{
                return(
                <Col md='1' className='m-3' key = {favorite.id}>
                    <FavoritesCard onClick = {toggleModal} favorite = {favorite}></FavoritesCard>
                </Col>
                )
            })}

        </Row>
        <Modal isOpen={modal} toggleModal={toggleModal} {...args}>
                        
                        <ModalBody>
                        This user does not yet have a WU+ account. Send them a link to create an account?
                        </ModalBody>
                        <ModalFooter>
                        <Button color="warning" onClick={toggleModal}>
                            Send link through text
                        </Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>
                            Cancel
                        </Button>
                        </ModalFooter>
                    </Modal>
        
        </div>
    )
}

export default Receivers;