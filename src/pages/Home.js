
import Main from '../components/Main'
import Header from '../components/Header'
import Welcome from '../components/Welcome';
import Buttons from '../components/buttons'
import Receivers from '../components/Receivers';

import '../App.css';

function Home() {
  return (
    <div>
      <Header/>  
      <Welcome/>
      <Buttons/>
      <Receivers title = {"Favorite Receivers"}/>
    </div>
  );
}

export default Home;
