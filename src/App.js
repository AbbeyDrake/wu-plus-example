
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main'
// import Header from './components/Header'
// import Welcome from './components/Welcome';
// import Buttons from './components/buttons'
// import Receivers from './components/Receivers';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main />
    </div>
    </BrowserRouter>
);
  
  // return (
  //   <div>
  //     <Header/>  
  //     <Welcome/>
  //     <Buttons/>
  //     <Receivers/>
  //   </div>
  
  // );
}

export default App;
