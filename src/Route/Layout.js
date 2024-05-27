import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import RoutesList from "./Route";

const Layout = () => {
  return (
    <div>
      <Router>
        <Routes>
          {RoutesList.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
