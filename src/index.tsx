import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Laoyut} from "./components/layout/Laoyut";
import {Home} from "./components/pages/home/Home";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Laoyut>
        <Home />
    </Laoyut>
  </React.StrictMode>
);


