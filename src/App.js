// BASE
import React from "react";

// UTILS
import PageMobilePhones from "./Pages/PageMobilePhones/PageMobilePhones";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageMenu from "./Pages/PageMenu/PageMenu";
import PageLogin from "./Pages/PageLogin/PageLogin";

// STYLES
import "./App.css";
import "antd/dist/antd.css";

function App() {
  let navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("email")) {
      return null;
    } else {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PageMenu />}></Route>
        <Route path="/login" element={<PageLogin />}></Route>
        <Route path="/mobilephones" element={<PageMobilePhones />} />
      </Routes>
    </>
  );
}

export default App;
