import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from '../pages/Home';
import QuickTransfer from "../pages/QuickTransfer";

function Main() {
 
    return (
      <div>
        
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/quicktransfer' component={QuickTransfer}/>
          {/* <Route path='/shop' component={ShopComponent} />
          <Route path='/contact' component={ContactComponent} /> */}
          <Redirect to='./home'/>
        </Switch>
      </div>
    );
  
}

export default withRouter(Main);
