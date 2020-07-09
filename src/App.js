import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './tailwind.output.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <div className='App bg-gray-300 min-h-screen'>
      <div className='max-w-lg mx-auto pt-12'>
        <Router>
          <Switch>
            <Fragment>
              <Navbar />
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Fragment>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
