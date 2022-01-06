import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./login";
import Register from "./Register";
import Home from "./home";
import AdminRegister from "./admin_register";
import AdminLogin from "./admin_login";
import Dashboard from "./dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/admin_register" element={<AdminRegister />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
