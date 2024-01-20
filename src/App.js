// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from 'react'
// // import Jupiter from './components/jupiter/Jupiter'

// // const App = () => {
// // //   const firstName = "Jupiter";
// // //   const lastName = "Rufus";
// // //   let input = (<input type='text' placeholder='Name'/>);

// //   return (
// //     <div>
// //       <Jupiter/>
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   const img1 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/391977/1.jpg?3104";
//   const img2 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/189499/1.jpg?1974";
//   const img3 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/6732352/1.jpg?7048";
//   const img4 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/9904491/1.jpg?0592";
//   const img5 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/0412362/1.jpg?1684";
//   const img6 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/5490752/1.jpg?7906";


//   return (
//     <div className='d-flex m-5 flex-wrap'>
  
//    <Card picture={img2} price={5000} product="microphne"/>
//    <Card picture={img1} price={60000} product="washing-machine"/>
//    <Card picture={img3} price={200000} product="Daniel Phone"/>
//    <Card picture={img4} price={70000}  product="Sneakers"/>
//    <Card picture={img5} price={6000000} product="TV"/>
//    <Card picture={img6} price={500000} product="Daniel PS5"/>
  

  
//     </div>
   
//   )
// }

// export default App

import React from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'
import Style from './components/Style'
import Advanced from './components/Advanced'
import Advanced2 from './components/Advanced2'
import Default from './components/Default'
import Types from './components/Types'
import Event from './components/Event'
import State from './components/State'
import State2 from './components/State2'

const App = () => {
  return (
    <div>
      <Child>I'm a child component</Child>
      <Child2>My name is Victor and I'm an Agba-coder</Child2>
      <Style/>
      <Advanced name="victor" job="agba-coder" location="go-my-code"/>
      <Advanced name="Daniel" job="Gadgets importer" location="China"/>
      <Advanced2 name="vera" course="computer science" job="Soft-ware Engineer"/>
      <Advanced2 name="Jupiter" course="Mass-communication" job="Elon-musk"/>
      <Default />
      <Types name="Jupiter" age={300} status="true"/>
      <Event/>
      <State/>
      <State2/>
    </div>
  )
}

export default App