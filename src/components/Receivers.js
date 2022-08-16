
import FavoritesCard from './FavoritesCard';
import { FAVORITES } from '../shared/favorites';
import {Col, Row} from 'reactstrap'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Receivers = ({title}) => {
    
    return(
        <div >
            <div className='category-header'>{title}</div>
            <Row className= 'ms-auto body-component'>
                {FAVORITES.map((favorite)=>{
                    return(
                    <Col xs='2' lg='1' className='md-3 mb-3' key = {favorite.id}>
                        <FavoritesCard favorite = {favorite}></FavoritesCard>
                    </Col>
                    )
                })}

            </Row>
        </div>
    )
}

export default Receivers;