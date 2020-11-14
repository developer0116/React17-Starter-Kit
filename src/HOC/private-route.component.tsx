import { LOGIN } from 'constants/paths';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
interface IPrivateRoute {
  component: any;
}
const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
  const { isAuth, loading } = useSelector((state: any) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          return <div>loading....</div>;
        }
        if (isAuth) {
          return <Component {...props} />;
        }
        return <Redirect to={LOGIN} />;
      }}
    />
  );
};
export default PrivateRoute;
