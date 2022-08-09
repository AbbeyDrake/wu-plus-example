import {Card, CardImg, CardImgOverlay, CardHeader, CardTitle} from 'reactstrap'
// import WULogo from '../assets/wu.jpeg'


//destructure favorite from props, then destructure favorite.image and favorite.name
const FavoritesCard = ({favorite}) => {
    const {image, name } = favorite;
    return (
        <Card style = {{width: "5rem"}}>
            <CardHeader style={{fontSize:".6rem", color: "black"}}>
                {name}
            </CardHeader>
            <CardImg 
                
                src={image}
                alt={name}
            /> 
        </Card>
    );
}

export default FavoritesCard;