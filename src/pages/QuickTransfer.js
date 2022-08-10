
import Header from '../components/Header'
import Welcome from '../components/Welcome';
import Receivers from '../components/Receivers';
import ChooseAccount from '../components/ChooseAccount';

import '../App.css';

function QuickTransfer() {
  return (
    <div>
      <Header/>  
      <Welcome/>
      <ChooseAccount/>
      <Receivers/>
    </div>
  );
}

export default QuickTransfer;
