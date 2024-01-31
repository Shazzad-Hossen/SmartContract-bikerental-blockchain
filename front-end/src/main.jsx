import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import BlockchainProvider from './context/BlockchainContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BlockchainProvider>
  <RouterProvider router={router} />
  </BlockchainProvider>
  </React.StrictMode>,
)
