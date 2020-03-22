import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;

























// import React, { Component }  from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// // import { Router, Route } from 'react-router'
// import home from './containers/home'
// import My from './containers/My'
// import shopping from './containers/shopping'

// // import logo from './logo.svg';
// import './App.css';
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <Route path="/" exact component={home}></Route>
//           <Route path="/My" component={My}></Route>
//           <Route path="/shopping" component={shopping}></Route>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

