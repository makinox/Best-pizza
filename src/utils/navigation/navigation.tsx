import React, {useContext} from 'react';
import {ARMcontext} from '../context/context';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function Navigation() {
  const {user} = useContext(ARMcontext);

  return (
    <BrowserRouter>
      {user?.data ? (
        <Switch>
          <Route path="/" component={() => <div>hola</div>} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/tiendas" component={() => <div>mundo</div>} />
          <Route path="/" component={() => <div>hola</div>} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
