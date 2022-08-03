import WULogo from '../assets/wu.jpeg'

const Header = () => {
    return(
        <div className="App-header">
            Western Union
            <img className = 'heart-img' src={WULogo} alt = "wulogo"/>
        </div>
    )
}

export default Header;