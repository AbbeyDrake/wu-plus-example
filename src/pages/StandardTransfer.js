
import Header from '../components/Header'
import Welcome from '../components/Welcome';
import Receivers from '../components/Receivers';


import '../App.css';

function StandardTransfer() {
  return (
    <div>
      <Header/>  
      <Welcome/>
      THIS IS A STANDARD TRANSFER
      <Receivers/>
    </div>
  );
}

export default StandardTransfer;
