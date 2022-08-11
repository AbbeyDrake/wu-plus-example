import {Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
    const navigate = useNavigate();
    const navigateQuickTransfer = () => {
        // 👇️ navigate to /
        navigate('/quicktransfer');
      };
      const navigateStandardTransfer = () => {
        // 👇️ navigate to /
        navigate('/standardtransfer');
      };
    return(

        <div className='row body-component'>
             <div className='col-md-4'>
                <Button type='submit' className='button'>WU+ Digital Banking</Button>
            </div>
            <div className='col-md-4'>
                <Button type='submit' className='button' onClick={navigateQuickTransfer}>Quick Transfer</Button>
            </div>
            <div className='col-md-4'>
                <Button type='submit' className='button' onClick={navigateStandardTransfer} >Standard Transfer</Button>
            </div>
           
            
            
        </div>
    
    )
}

export default Buttons;