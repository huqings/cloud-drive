import * as React from 'react';
import App from './App';
import '@/styles/globals.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const RootComponent = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RootComponent />);
