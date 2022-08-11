// import React, { Component } from "react";
import { useNavigate } from "react-router";
import { Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import QuickTransfer from "../pages/QuickTransfer";
import StandardTransfer from "../pages/StandardTransfer"

const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

function Main() {
 
    return (
      <div>
        
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/quicktransfer' element={<QuickTransfer/>}/>
          <Route path='/standardtransfer' element={<StandardTransfer/>} />
          {/* <Route path='/contact' component={ContactComponent} /> */}
          {/* <Navigate to='/home'/> */}
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    );
  
}

export default withRouter(Main);
