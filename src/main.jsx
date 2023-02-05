import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './main.css'
import App from './App';
import Footer from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Footer />
  </BrowserRouter>
)
