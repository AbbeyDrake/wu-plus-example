import WULogo from '../assets/wu.jpeg'
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return(

        <div>
        <Navbar dark color='black' sticky='top' expand='md'>
           
                <NavbarBrand href='/'>
                    <img style={{width:'10rem'}}src={WULogo} alt='WU logo' />
                    || from Western Union
                </NavbarBrand>
            
        </Navbar>
        
    </div>
        // <div className="App-header" >
            
        //     <img className = 'heart-img' src={WULogo} alt = "wulogo" width="10%" style={{paddingTop : "0rem"}}/>
        //      <span className='header-font'>from Western Union</span>
        // </div>
    )
}

export default Header;