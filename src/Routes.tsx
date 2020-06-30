import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import { PATHS } from 'app.constants';
import history from 'customHistory';
import Layout from 'components/Layout';
import Loader from 'components/Loader';

const LoadableComponent = loadable(({ url }: any) => import(`${url}`), {
  fallback: (
    <Layout>
      <Loader />
    </Layout>
  ),
});

const Routes = () => {
  const routes = [
    {
      path: PATHS.index,
      component: './pages/Index',
      private: false,
      exact: true,
    },
    {
      path: PATHS.trades,
      component: './pages/Trades',
      private: false,
      exact: true,
    },
    {
      path: `${PATHS.trades}/:id`,
      component: './pages/Trades',
      private: false,
      exact: true,
    },
  ];

  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, key) => (
          <Route
            path={route.path}
            exact={route.exact}
            render={() => <LoadableComponent url={route.component} />}
            key={key}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
