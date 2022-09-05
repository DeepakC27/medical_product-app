import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container)
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

reportWebVitals();
