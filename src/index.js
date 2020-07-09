import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// ***********react component*************

// function EmployeeInfo (employee){
//   return<div>
//      <p >employee NAme :{employee.Name}    </p>
//      <p >employee Id :{employee.Id}    </p>
//   </div>;
// }
//  const employee = {
//   Name : 'dileep' ,
//   Id : '99'
//  } 
//  const element = (
//   <h1 className="testclass">
//      {EmployeeInfo (employee)}
//   </h1>
// );
//  ReactDOM.render(element,document.getElementById("root"));

// function EmployeeNewInfo (newemployee){
//   return <div className="testclass">
//   <p>hello my name : {newemployee.name}</p>
//   <p>hello my id : {newemployee.id}</p>
//   </div>;
// }

// const newelement = <EmployeeNewInfo name="kds" id="100" ClassName="testclass"></EmployeeNewInfo>

// ReactDOM.render(newelement,document.getElementById("root1"));

// by using var 

var EmployeeNewInfo1=(newemployee1)=>{
  return <div >
  <p>hello my name : {newemployee1.name}</p>
  <p>hello my id : {newemployee1.id}</p>
  <Department deptName={newemployee1.deptName} depthead={newemployee1.depthead}></Department>
  </div>;
}
var Department=(deptinfo)=>{
  return <div>
    <p>hello dept name is :{deptinfo.deptName}</p>
    <p> hello dept head is :{deptinfo.depthead}</p>
  </div>;
}


const newelement1 = <EmployeeNewInfo1 name="kds" id="100000" deptName="ECE" depthead="govindh" ClassName="testclass" ></EmployeeNewInfo1>


ReactDOM.render(newelement1,document.getElementById("root2"));











//***********with out jsx(java script syntax extention)*************

//const element=React.createElement("h1",null,"welcome again");
//ReactDOM.render(element,document.getElementById("root"));
 
// const element=React.createElement("div",{ClassName:"testclass"},
// React.createElement("h1",null,"hello all"),
// React.createElement("h2",null,"you are watching my blog"));

// ReactDOM.render(element,document.getElementById("root"));






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

***********with jsx binding element*************

const name = 'kds'
const element = <h1>hello mr {name}</h1>

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