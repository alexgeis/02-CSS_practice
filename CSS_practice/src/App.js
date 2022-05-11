import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
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
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              eveniet? Dolorem dignissimos maiores non delectus possimus dolor
              nulla repudiandae vitae provident quae, obcaecati ipsam unde
              impedit corrupti veritatis minima porro?
            </div>
            <div className="card">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              quaerat qui iure ipsam maiores velit tempora, deleniti nesciunt
              fuga suscipit alias vero rem, corporis officia totam saepe
              excepturi odit ea.
            </div>
            <div className="card">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              illo ex quas, commodi eligendi aliquam ut, dolor, atque aliquid
              iure nulla. Laudantium optio accusantium quaerat fugiat, natus
              officia esse autem?
            </div>
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nihil impedit eius amet adipisci dolorum vel
              nostrum sit excepturi corporis tenetur cum, dolore incidunt
              blanditiis. Unde earum minima laboriosam eos!
            </div>
            <div className="card">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              illo ex quas, commodi eligendi aliquam ut, dolor, atque aliquid
              iure nulla. Laudantium optio accusantium quaerat fugiat, natus
              officia esse autem?
            </div>
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nihil impedit eius amet adipisci dolorum vel
              nostrum sit excepturi corporis tenetur cum, dolore incidunt
              blanditiis. Unde earum minima laboriosam eos!
            </div>
          </section>
        </div>

        <div className="footer">
          <div>The Odin Project ❤️</div>
        </div>
      </div>
    </>
  );
}
