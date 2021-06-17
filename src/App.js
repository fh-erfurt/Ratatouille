import './App.css';
import Header from './components/header';
import Home from './components/home';
import RecipesMenu from './components/recipesMenu';
import Recipe from './components/recipe';
import Login from './components/login';
import React from 'react';

import PrimeReact from "primereact/api";
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

PrimeReact.ripple = true;
function App() {

  const HomePage=()=>{
    return (
    <React.Fragment>
      <Header></Header>
      <Home></Home>
    </React.Fragment> )
  }
  const RecipesMenuPage=()=>{
    return (
      <React.Fragment>
        <Header></Header>
        <RecipesMenu></RecipesMenu>
      </React.Fragment> )
  }
  const RecipePage=()=>{
    return (
      <React.Fragment>
        <Header></Header>
        <Recipe></Recipe>
      </React.Fragment> )
  }
  const LoginPage=()=>{
    return (
      <React.Fragment>
        <Login></Login>
      </React.Fragment> )
  }
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path="/menu">
              <RecipesMenuPage/>
            </Route>
            <Route path="/recipe">
              <RecipePage/>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </Router>
    )

 
}

export default App;
