import React from 'react';
import {
  BrowserRouter, Routes, Route,
  IndexRouteProps,
  PathRouteProps
} from 'react-router-dom';
import _ from 'lodash';
import Home from './views/home';
import Block from './views/block';
import Error from './views/error';

type RouterItem = PathRouteProps

export const RouterList: RouterItem[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/blocks',
    element: <Block />
  },
  {
    path: '/*',
    element: <Error />
  }
];

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {
          /* eslint-disable react/jsx-props-no-spreading */
          _.map(RouterList, (item: RouterItem) => (
            <Route key={item?.path} {...item} />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
