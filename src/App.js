//0️⃣ uncomment lines below👇🏻
import React from "react";
import ReactDOM from "react-dom";
//0️⃣ uncomment lines above ☝️

//2️⃣ uncomment this 👇🏻 line
// import "./styles.css";

//3️⃣ CUT (ctrl-X) the entire <nav>...</nav> inside the function below
// then PASTE it into TopNav.js!

//4️⃣ uncomment this 👇🏻 line
// import TopNav from "./Components/TopNav";
//5️⃣ copy "<TopNav/>" and paste it inside the <div> below.

//6️⃣ CUT (ctrl-X) the entire <article>...</article> inside the function below
// then PASTE into Article.js!
//7️⃣ uncomment this 👇🏻 line
// import Article from "./Components/Article";
//8️⃣ copy "<Article/>" and paste it inside the <div> below.

function App() {
  return (
    <div className="app-container">
      {/* 2️⃣ uncomment lines below👇🏻 */}
      <nav>
        <ul>
          <li>Farm</li>
          <li>Food </li>
          <li>Fun</li>
          <li>Folks</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <img src="./img/barn.jpg" alt="barn" />
      <article>
        <h1>Come Visit Our Farm!</h1>
        <p>
          We have lots to do here and lots to see! Apples ducks straw, quail a
          ostriches donkey, hay hook cucumbers. Bulls at rose garden cucumbers
          mice sunflower wheat in pig. Quack hammers eggplant is utters nails
          garden. Bulls at rose garden cucumbers mice sunflower wheat in pig.
          Bulls at rose garden cucumbers mice sunflower wheat in pig. Rooster
          celery pineapples fertilizer, a melon chirp pets in. Hoot squeal moose
          quack, crows doggies frogs crickets chirp.
        </p>
      </article>
      {/*2️⃣uncomment lines above ☝️*/}
    </div>
  );
}

/*1️⃣ uncomment line below ⬇️*/
ReactDOM.render(<App />, document.getElementById("root"));
