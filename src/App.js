import React from 'react';
import PostList from '../src/components/PostList';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <PostList />
     
    </div>
  );
}

export default App;
