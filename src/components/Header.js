import WULogo from '../assets/wu.jpeg'
import {useState} from 'react'
import { Navbar,
        Button, 
        NavbarBrand,
        Collapse,
        NavbarToggler,
        Nav,
        NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(

        <div>
        <Navbar dark color='black' sticky='top' expand='md'>
           
            <NavbarBrand className='ms-3' href='/'>
                <img style={{width:'10rem'}}src={WULogo} alt='WU logo' />
                || from Western Union
            </NavbarBrand>

            <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <Button color='warning' size='lg'><a target="_blank"href='https://www.westernunion.com/de/en/wuplus.html'>My WU+ Bank</a>
                                
                        </Button>
                    </NavItem>
                    
                    <NavItem> 
                        <NavLink className='nav-link' to='/quicktransfer'>
                            <i className='fa fa-home fa-lg'/> Quick Transfer
                        </NavLink>
                    </NavItem>

                    <NavItem> 
                        <NavLink className='nav-link' to='/quicktransfer'>
                            <i className='fa fa-home fa-lg'/> Log Out
                        </NavLink>
                    </NavItem>
                   
                </Nav>
            </Collapse>
            
        </Navbar>
        
    </div>
        // <div className="App-header" >
            
        //     <img className = 'heart-img' src={WULogo} alt = "wulogo" width="10%" style={{paddingTop : "0rem"}}/>
        //      <span className='header-font'>from Western Union</span>
        // </div>
    )
}

export default Header;