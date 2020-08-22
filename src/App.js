import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Addemployee } from './components/Addemployee';
import { Editemployee } from './components/Editemployee';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Addemployee} exact />
        <Route path="/edit/:id" component={Editemployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
