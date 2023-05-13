import './App.css';
import HeaderLoggedIn from './components/headerLoggedIn';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from './pages/CartPage';


function App() {


  const [state, setState] = useState({
    isLoggedIn: false,
    credentials: {
      adminUser: 'admin',
      adminPass: 'admin',
      normalUser: 'user',
      normalPass: '1234'
    },
    products: { 
      1: { name: "OnePlus Nord CE 3 Lite", img: "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg",
     details: "OnePlus Nord CE 3 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",price:19999.00 },
      2: {name: "Samsung Galaxy M04", img: "https://m.media-amazon.com/images/I/814ePfNubRL._AC_UY218_.jpg", details: "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera", price: "8499"},
      3: {name: "Itel P40", img: "https://m.media-amazon.com/images/I/71yTJCdHdaL._AC_UY218_.jpg", details: "Itel P40 (6000mAh Battery with Fast Charging | 2GB RAM + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold", price: "6499"},
      4: {name: "OnePlus Nord CE 2 Lite", img: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UY218_.jpg", details: "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)", price: "18990"},
      5: {name: "Samsung Galaxy M14", img: "https://m.media-amazon.com/images/I/91zMokvCNuL._AC_UY218_.jpg", details: "Samsung Galaxy M14 5G (Smoky Teal, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | 12GB RAM with RAM Plus | Android 13 | Without Charger", price: "15990"},
      6: {name: "Samsung Galaxy M04", img: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UY218_.jpg", details: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera", price: "8499"},
      7: {name: "Samsung Galaxy M13", img: "https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UY218_.jpg", details: "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus", price: "10999"},
      8: {name: "realme narzo N55", img: "https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UY218_.jpg", details: "realme narzo N55 (Prime Blue, 6GB+128GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera", price: "12999"},
      9: {name: "Redmi Note 12", img: "https://m.media-amazon.com/images/I/81MZRUuHJIL._AC_UY218_.jpg", details: "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera", price: "17999"},
      10: {name: "realme narzo 50i Prime", img: "https://m.media-amazon.com/images/I/81Te0dZU7nL._AC_UY218_.jpg", details: "realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery", price: "7999"},
    },
    userProducts: {
    
    },
    loggedInUser: "user",
    selectedProductId: "",
    shownProducts: {}
  });
  return (
    <>

      <Router>
         <HeaderLoggedIn isLoggedIn = {state.isLoggedIn} globalState={state} globalsetState={setState} /> 
        <Switch>
          <Route exact path="/" >
            <HomePage globalState={state} globalsetState={setState} />
          </Route>
          <Route exact path="/login" >
            <LoginPage credentials={state.credentials} globalsetState={setState} />
          </Route>
          <Route exact path="/product" >
            <ProductPage credentials={state.credentials} globalsetState={setState} 
            selectedProductId={state.selectedProductId} products={state.products}/>
          </Route>
          <Route exact path='/cart'>
            <CartPage globalsetState={setState} cartProducts = {state.userProducts} products={state.products}/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;


/*state = {
  isLoggedIn:true/false
  
} */