import React, { useEffect } from "react";
import { MainPage, OfferPage, FavoritePage, LoginPage } from "pages";
import { Switch, Route } from "react-router-dom";
import { withPrivateRoute } from "hocs";
import { connect } from "react-redux";
import { fetchUser } from "src/actions";
import { BASE_URL } from "src/constants";

interface AppProps {
  loadUser: () => void;
}

const App: React.FC<AppProps> = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <Switch>
      <Route path={`${BASE_URL}/`} exact component={MainPage} />
      <Route path={`${BASE_URL}/login`} exact component={LoginPage} />
      <Route
        path={`${BASE_URL}/favorites`}
        exact
        component={withPrivateRoute(FavoritePage)}
      />
      <Route path={`${BASE_URL}/offer/:id`} exact component={OfferPage} />
    </Switch>
  );
};

const mapDispatchToProps = dispatch => ({
  loadUser: () => {
    dispatch(fetchUser());
  }
});

export default connect(null, mapDispatchToProps)(App);
