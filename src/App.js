import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, TopTopbar, Topbar, Products, CartPage, Footer, Header, JoinUsPage } from './components';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const appStyles = {
    backgroundColor: '#f8f8f8', // Set your desired background color here
  }; 

  return (
    <Router>
      <div className="App" style={appStyles}>
        <TopTopbar />
        <Topbar />
        <Navbar cartItems={cartItems} />

        {/* Conditionally render the Header component */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> {/* Render Header on the main page */}
                <Products cartItems={cartItems} setCartItems={setCartItems} />
              </>
            }
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route path="/joinUsPage" element={<JoinUsPage />} ></Route>
          {/* Add other routes here */}
        </Routes>
        
          {/* Add other routes here */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
