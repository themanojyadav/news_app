import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Footer } from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/sports" exact element={<News key="sports" category="sports" pageSize={12} />} />
            <Route path="/technology" exact element={<News key="technology" category="technology" pageSize={12} />} />
            <Route path="/general" exact element={<News key="general" category="general" pageSize={12} />} />
            <Route path="/science" exact element={<News key="science" category="science" pageSize={12} />} />
            <Route path="/health" exact element={<News key="health" category="health" pageSize={12} />} />
            <Route path="/entertainment" exact element={<News key="entertainment" category="entertainment" pageSize={12} />} />
            <Route path="/business" exact element={<News key="business" category="business" pageSize={12} />} />
            <Route path="/" exact element={<News category="general" key="home" pageSize={12} />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
