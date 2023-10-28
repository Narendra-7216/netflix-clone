import React from "react";
import Navbar from "./components/Navbar";
import { Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Gain from "./components/Gain";
import { AuthContextProvider } from "./context/AuthContext";



function App() {
  return (
    <div>
      
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
