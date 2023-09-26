// // App.js

// import React from "react";
// import Carousel from "./Components/Body.js";
// import Navbar from "./Components/Header.js";
// import "./css/Carousel.css";
// import "./css/body.css";
// export default function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="body-container">
//         <Carousel images={images} />
//         <div className="card-container"></div>
//       </div>
//     </div>
//   );
// }

// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import App from '../App';


function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/loginSuccessful" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
