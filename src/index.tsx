import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppRoutes} from "./components/routes/AppRoutes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <AppRoutes />
  </React.StrictMode>
);


