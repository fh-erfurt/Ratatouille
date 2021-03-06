import './App.css';
import './style.scss';
import 'primeflex/primeflex.css';

import Header from './components/header';
import Home from './components/home';
import RecipesMenu from './components/recipesMenu';
import RecipeDetail from './components/recipeDetail';
import Login from './components/login';
import Profile from './components/profile';
import CreateRecipe from './components/createRecipe';
import Favoriten from './components/favoriten';
import Recipe from './components/recipe';
import React from 'react';

import PrimeReact from "primereact/api";
import{
  HashRouter as Router,
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
  const LoginPage=()=>{
    return (
      <React.Fragment>
        <Header></Header>
        <Login></Login>
      </React.Fragment> )
  }
  const ProfilePage=()=>{
    return (
      <React.Fragment>
        <Header></Header>
        <Profile></Profile>
      </React.Fragment> )
  }
  const CreateRecipePage=()=>{
    return (
      <React.Fragment>
        <Header></Header>
        <CreateRecipe></CreateRecipe>
      </React.Fragment> )
  }
  const FavoriteRecipe=()=>{
    return (
    <React.Fragment>
      <Header></Header>
      <Favoriten></Favoriten>
    </React.Fragment> )
  }
    return(
      <Router hashType="noslash" >
        <div className="App">
          <Switch>
            <Route path="/menu">
              <RecipesMenuPage/>
            </Route>
            <Route path="/recipe/edit/:recipeId" render={(props) => 
              <React.Fragment>
                <Header></Header>
                <RecipeDetail recipeId={props} />
              </React.Fragment> } 
            />
            <Route path="/recipe/:recipeId" render={(props) => 
              <React.Fragment>
                <Header></Header>
                <Recipe recipeId={props} />
              </React.Fragment> } 
            />
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/profile">
              <ProfilePage/>
            </Route>
            <Route path="/create">
              <CreateRecipePage/>
            </Route>
            <Route path="/favorites">
              <FavoriteRecipe/>
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
