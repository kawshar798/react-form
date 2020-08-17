import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainForm from './Components/form';
import SignUpForm from './Components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';


class  App extends React.Component{
  // state = {
  //   users:[]
  // }
  // createUser = user => {
  //   user.id = new Date().getTime().toString();
  //   this.setState({
  //     users:[...this.state.users,user]
  //   })
  // }
  render(){
  return (
    <div className="container">
    <div className="App">
      <Header/>
    <Switch>
    <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/normal-form">
          <MainForm/>
          </Route>
          <Route path="/signup-form">
          <SignUpForm createUser={this.createUser} />
          </Route>

          <Route path="*">
         <NotFound />
          </Route>
      
        </Switch>
    </div>
    </div>
  );
}
}

export default App;
