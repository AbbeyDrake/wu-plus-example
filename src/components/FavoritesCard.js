import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'
import WULogo from '../assets/wu.jpeg'

const FavoritesCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='5rem'
                src={WULogo}
                alt={props.favorite.name}
            /> 
            <CardImgOverlay>
                <CardTitle style ={{color: "white"}}>{props.favorite.name}</CardTitle>
            </CardImgOverlay>

        </Card>
    );
}

export default FavoritesCard;