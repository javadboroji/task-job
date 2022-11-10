import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import  AppContext  from './components/Context/Context'
import App from './App';

//export const newContext=createContext('def');
const root = ReactDOM.createRoot(document.getElementById('root'));
const test='ddd'
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>


  </React.StrictMode>
);


