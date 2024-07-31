import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import {Routes,Route,Link, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

const routes = (
  <Routes>
  <Route path = '/' element={<HomeScreen/>}></Route>
  <Route path = '/profile' element={<ShopScreen/>}></Route>
  <Route path = '/shop' element={<ProfileScreen/>}></Route>
  </Routes>
);

class App extends React.Component{
  render(){
    return(
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar/>
          <ErrorBoundary>
            {routes}  
          </ErrorBoundary>

          <ErrorBoundary>
            <PostList/> 
          </ErrorBoundary>

          <Example1/>
          <Example2/>
          <Example3/>
          
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

function Navbar(){
  return(
    <>
    <h1>Welcome to React Router</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/shop">Shop</NavLink>
    </>
  )
}

function HomeScreen(){
  return <h1>Home</h1>;
}

function ShopScreen(){
  return <h1>Shop</h1>;
}

function ProfileScreen(){
  return <h1>Profile</h1>
}

export default App;