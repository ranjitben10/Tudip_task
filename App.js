import React from 'react'
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/screens/Home';
import Navbar from './components/Navbar';


const Routing = ()=>{
  return(
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routing/>
    </BrowserRouter>
  );
}

export default App;
