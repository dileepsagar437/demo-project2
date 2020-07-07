import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//***********with out jsx(java script syntax extention)*************

//const element=React.createElement("h1",null,"welcome again");
//ReactDOM.render(element,document.getElementById("root"));
 
const element=React.createElement("div",{ClassName:"testclass"},
React.createElement("h1",null,"hello all"),
React.createElement("h2",null,"you are watching my blog"));

ReactDOM.render(element,document.getElementById("root"));




/*
// ***********with jsx*************
const element= <h1 >hello world</h1>;

ReactDOM.render(element,document.getElementById("root"));

const newelement=<h1 className="testclass">iam alone</h1>;

ReactDOM.render(newelement,document.getElementById("root1"));

const element = (
  <div className='testclass'>
    <h1>hello</h1>
    <h2>hello all</h2>
  </div>
)

ReactDOM.render(element,document.getElementById("root"));
*/





/*
// ***********default*************
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  
<React.StrictMode>
 <App />
   </React.StrictMode>,
   document.getElementById('root')
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
   // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
  */