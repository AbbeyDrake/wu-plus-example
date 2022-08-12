



import Header from '../components/Header'
import Welcome from '../components/Welcome';
import Receivers from '../components/Receivers';
import ChooseAccount from '../components/ChooseAccount';
import AccountBalance from '../components/AccountBalance';

import '../App.css';

function QuickTransfer() {
  return (
    <div>
      <Header/>  
      <div className='body-component container'>
        Hi Username
      </div>
      <AccountBalance/>
      <div className='category-header'>Send Money</div>
      <ChooseAccount/>
      <div className="category-header" >
         <span>Favorite Receivers</span>
    </div>
      <Receivers/>
    </div>
  );
}

export default QuickTransfer;
