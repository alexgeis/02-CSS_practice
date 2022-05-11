import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
//Planned sections
// -media query
// -flexbox
// -pseudo classes/Elements
// -forms
// -grid

export default function App() {
  return (
    <>
      <div className="appBody">
        <Header />
        <div className="main">
          <div className="sidebar">
            <ul>
              <li>
                <a href="#">⭐ - link one</a>
              </li>
              <li>
                <a href="#">🦸🏽‍♂️ - link two</a>
              </li>
              <li>
                <a href="#">🖌️ - link three</a>
              </li>
              <li>
                <a href="#">👌🏽 - link four</a>
              </li>
            </ul>
          </div>
          <section className="content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
