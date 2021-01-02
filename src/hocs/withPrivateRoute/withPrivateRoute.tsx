import React from 'react';
import { Redirect } from 'react-router-dom';
import { BASE_URL } from 'src/constants';
import { useSelector } from 'src/hooks';

interface PrivateRouteComponentProps {
  redirectPathname: string;
}

const withPrivateRoute = (Component: React.FC) => {
  const isUserAuth = useSelector((state) => state.auth.isUserAuth);

  const PrivateRouteComponent: React.FC<PrivateRouteComponentProps> = ({
    redirectPathname = BASE_URL,
    ...props
  }) => (isUserAuth ? <Component {...props} /> : <Redirect to={redirectPathname} />);

  return PrivateRouteComponent;
};

export default withPrivateRoute;
