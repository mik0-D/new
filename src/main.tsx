import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
