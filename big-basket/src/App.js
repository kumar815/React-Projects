import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Home from "./root/components/Home";
import Navbar from "./root/components/Navbar/Navbar";
import ProductAdmin from "./product/components/Admin/ProductAdmin";
import ProductList from "./product/components/List/ProductList";
import UpdateProduct from "./product/components/Update/UpdateProduct";

function App() {
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <Route exact path ="/" component={Home}/>
                  <Route exact path ="/product/list" component={ProductList}/>
                  <Route exact path ="/product/admin" component={ProductAdmin}/>
                  <Route exact path ="/product/create" component={CreateProduct}/>
                  <Route exact path ="/product/:productId" component={UpdateProduct}/>
              </Switch>
          </Router>
      </React.Fragment>
  );
}
export default App;
