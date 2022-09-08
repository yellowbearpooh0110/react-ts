import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
