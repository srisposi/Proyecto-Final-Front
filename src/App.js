import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import CheckoutPage from "./component/CheckoutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { useEffect } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import CheckOut from "./component/CheckOutForm/Checkout";
import ClientChat from "./pages/ClientChat/ClientChat";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route Route path="/chat" element={<ClientChat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
