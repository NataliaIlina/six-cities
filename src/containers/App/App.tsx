import React, { useEffect } from 'react';
import { MainPage, OfferPage, FavoritePage, LoginPage } from 'src/pages';
import { Switch, Route } from 'react-router-dom';
import withPrivateRoute from 'src/hocs';
import { fetchUser } from 'src/ducks/auth/auth';
import { BASE_URL } from 'src/constants';
import { useDispatch } from 'src/store';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Switch>
      <Route path={`${BASE_URL}/`} exact component={MainPage} />
      <Route path={`${BASE_URL}/login`} exact component={LoginPage} />
      <Route path={`${BASE_URL}/favorites`} exact component={withPrivateRoute(FavoritePage)} />
      <Route path={`${BASE_URL}/offer/:id`} exact component={OfferPage} />
    </Switch>
  );
};
export default App;
