import {Button} from 'reactstrap'

const Buttons = () => {
    return(

        <div className='row body-component'>
            
            <div className='col-md-4'>
                <Button type='submit' className='button'>Standard Transfer</Button>
            </div>
            <div className='col-md-4'>
                <Button type='submit' className='button'>WU+ Digital Banking</Button>
            </div>
            <div className='col-md-4'>
                <Button type='submit' className='button'>Quick Transfer</Button>
            </div>
            
        </div>
    
    )
}

export default Buttons;