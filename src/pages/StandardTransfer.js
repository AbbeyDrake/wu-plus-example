
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
        </div></Container>
      <div className="box" style={{color: 'white'}}>THIS IS A STANDARD TRANSFER - FORM GOES HERE</div>
      <div className='category-header'>Pay Again</div>
      <Receivers/>
      
    </div>
  );
}

export default StandardTransfer;
