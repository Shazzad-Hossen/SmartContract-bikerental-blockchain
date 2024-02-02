import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import BlockchainProvider from './context/BlockchainContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BlockchainProvider>
  <ToastContainer />
  <RouterProvider router={router} />
  </BlockchainProvider>
  </React.StrictMode>,
)
