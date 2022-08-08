
import FavoritesCard from './FavoritesCard';
import { FAVORITES } from '../shared/favorites';
import {Col, Row} from 'reactstrap'


const Receivers = () => {
    return(
        <div>
        <div className="category-header" >
             <span>Favorite Receivers</span>
        </div>
        <Row className= 'ms-auto'>
            {FAVORITES.map((favorite)=>{
                return(
                <Col md='3' className='m-3' key = {favorite.id}>
                    <FavoritesCard favorite = {favorite}></FavoritesCard>
                </Col>
                )
            })}

        </Row>
        
        </div>
    )
}

export default Receivers;