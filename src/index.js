import React from "react";
import ReactDOM from "react-dom";

const element = (
  <div className="container">
    <nav></nav>
    <div className="col">
      <section>
        <div className="row">
          <h1>Say hello to ReactJS</h1>
        </div>
        <div className="row">
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
        </div>
        <div className="row">
          <button>Awesome</button>
        </div>
      </section>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
