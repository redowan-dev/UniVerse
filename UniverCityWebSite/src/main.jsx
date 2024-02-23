import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Router';
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>

        <QueryClientProvider client={queryClient}>

    <div >
    <RouterProvider router={router} />
    </div>

    </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
