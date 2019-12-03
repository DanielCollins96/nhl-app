import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Layout from './hoc/Layout/Layout';
import Roster from './container/Roster/Roster';
import Teams from './container/Teams/Teams';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
    {/* <Layout> */}
      {/* <Nav /> */}
    <Header />
      <Switch className="">
         <Route path="/" exact component={Home} />
         <Route path="/Roster" component={Roster} />
         <Route path="/Teams" component={Teams} />
      </Switch>      

    {/* </Layout> */}

     
    </div>
  );
}
}


const Home = () => (
  <div style={{marginTop : '0px'}}>
    <h1>HomePage</h1>
    <p>ho</p>
  </div>
)

export default App;
