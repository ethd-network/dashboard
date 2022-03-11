import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Block from './views/block';
import Error from './views/error';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/blocks" element={<Block />} />
        {/* <Route path="/block/:h" element={<PageBlock />} /> */}
        {/* <Route path="/txs" element={<PageTxs />} /> */}
        {/* <Route path="/tx/:hash" element={<PageTxs />} /> */}
        {/* <Route path="/dashboard" element={<PageDashboard />} /> */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
