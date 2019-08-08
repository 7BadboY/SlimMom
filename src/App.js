import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Auth from './pages/Auth/Auth.jsx';
import Home from './pages/Home/Home';
import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <ProtectedComponent active={false} path="/auth" component={Auth} />
      <ProtectedComponent active={false} exact path="/" component={Home} />
      <ProtectedComponent active={true} exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
