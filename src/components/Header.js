import WULogo from '../assets/wu.jpeg'

const Header = () => {
    return(
        <div className="App-header" >
            
            <img className = 'heart-img' src={WULogo} alt = "wulogo" width="10%" style={{paddingTop : "0rem"}}/>
             <span className='header-font'>from Western Union</span>
        </div>
    )
}

export default Header;