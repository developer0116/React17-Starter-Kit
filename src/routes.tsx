import React, { Fragment } from 'react';
import { Home } from 'containers/home';
import { IRoute } from 'models/router.model';
import * as paths from 'constants/paths';
import { Login, Register } from 'containers/auth';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'HOC/private-route.component';
import { uuid } from 'helpers';

const routes: IRoute[] = [
  {
    path: paths.REGISTER,
    exact: true,
    component: Register,
    isPrivate: false,
    uuid: uuid(),
  },
  {
    path: paths.LOGIN,
    exact: false,
    component: Login,
    isPrivate: false,
    uuid: uuid(),
  },
  {
    path: paths.HOMEPAGE,
    exact: false,
    component: Home,
    isPrivate: true,
    uuid: uuid(),
  },
];

const AppRoutes: React.FC = () => {
  return (
    <Fragment>
      <Switch>
        {routes.map(({ isPrivate, uuid, ...rest }: IRoute) => {
          if (!isPrivate) {
            return <Route key={uuid} {...rest} />;
          }
          return <PrivateRoute key={uuid} {...rest} />;
        })}
      </Switch>
    </Fragment>
  );
};

export default AppRoutes;
