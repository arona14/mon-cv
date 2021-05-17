import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
//import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/competences" component={Knowledges}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;