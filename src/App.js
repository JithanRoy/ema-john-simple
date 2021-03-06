import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop'
import Review from './components/Review/Review'
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Notfound from './components/NotFound/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
        <Header></Header>
        <Router>
          <Switch>
              <Route path='/shop'>
                <Shop></Shop>
              </Route>

              <Route path='/review'>
                  <Review></Review>
              </Route>

              <Route path='/inventory'>
                 <Inventory></Inventory>
              </Route>

              <Route path="/product/:productkey">
                  <ProductDetail></ProductDetail>
              </Route>

              <Route path='/'>
                <Shop></Shop>
              </Route>

              <Route path='*'>
                  <Notfound></Notfound>
              </Route>
          </Switch>
        </Router>
       
    </div>
  );
}

export default App;
