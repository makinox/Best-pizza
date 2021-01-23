import {useContext} from 'react';
import {ARMcontext} from '../context/context';
import {Login, Store, Stores} from '../../pages';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function Navigation() {
  const {user} = useContext(ARMcontext);

  return (
    <BrowserRouter>
      {user.id ? (
        <Switch>
          <Route path="/tiendas" component={Stores} />
          <Route path="/tienda" component={Store} />
          <Route path="/" component={Store} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
