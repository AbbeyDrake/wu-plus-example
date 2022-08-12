
import Header from '../components/Header'
import Welcome from '../components/Welcome';
import Receivers from '../components/Receivers';


import '../App.css';
import { Container } from 'reactstrap';

function StandardTransfer() {
  return (
    <div>
      <Header/>  
        <Container>
            <div className='body-component'>
            Hi Username
            </div>
        </Container>
            <a target="_blank"className="box" style={{color: 'white'}} href="https://www.westernunion.com/us/en/web/send-money/start">NAVIGATE TO STANDARD TRANSFER</a>
     <div className='category-header'>Pay Again</div>
      <Receivers/>
      
    </div>
  );
}

export default StandardTransfer;
