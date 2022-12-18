import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Suspense, lazy } from 'react';

import { LoadingScreen } from './components/loading';

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// Not found pages
const NotFound = Loadable(
  lazy(() =>
    import('./components/not-found').then((module) => ({
      default: module.NotFound,
    }))
  )
);
const Home = Loadable(lazy(() => import('../src/pages/Catalog')));
const Catalog = Loadable(lazy(() => import('../src/pages/Home')));
const Detail = Loadable(lazy(() => import('../src/pages/detail/Detail')));
const TopRate = Loadable(lazy(() => import('../src/pages/TopRate')));
const NowPlaying = Loadable(lazy(() => import('../src/pages/NowPlaying')));

const RootRoutes: FC = () => {
  return (
    <Route
      render={(props: any) => (
        <>
          <Header {...props} />
          <Switch>
            <Route path='/:category/search/:keyword' component={Catalog} />
            <Route path='/:category/:id' component={Detail} />
            <Route path='/movie' component={Catalog} />
            <Route path='/top_rated' component={TopRate} />
            <Route path='/now_playing' component={NowPlaying} />
            <Route path='/' exact component={Home} />
            <Route path='*' exact component={NotFound} />
          </Switch>
          <Footer />
        </>
      )}
    />
  );
};

export default RootRoutes;
