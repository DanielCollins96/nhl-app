import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Roster from './container/Roster/Roster';
import Teams from './container/Teams/Teams';
// import Toolbar from './components/Toolbar/Toolbar';

import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
    <Layout>
      <Switch>
         <Route path="/Players" component={Roster} />
         <Route path="/Teams" component={Teams} />
      </Switch>      
    </Layout>

     
    </div>
  );
}
}

export default App;
