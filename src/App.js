import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])
  const addBtnHandler = (country) =>{
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h2>Added country: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} addBtnHandler={addBtnHandler} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
