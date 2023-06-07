import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/User/Login/LoginPage';
import Register from './Pages/User/Login/RegisterPage';
import HomeUser from './Pages/User/Home';
import Manage from './Pages/User/Manage';
import Sponsor from './Pages/User/Sponsor';
import Recipients from "./Pages/User/Recipients";
import Setting from "./Pages/User/Setting";
import DetailsUser from "./Pages/User/DetailsUser";
import Account from "./Pages/User/Account";
import SendMoney from "./Pages/SendMoney/SendMoney";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/user' element={<HomeUser/>}/>
            <Route path='/manage' element={<Manage/>}/>
            <Route path='/sponsor' element={<Sponsor/>}/>
            <Route path='/recipients' element={<Recipients/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/detailsUser' element={<DetailsUser/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/sendMoney' element={<SendMoney/>}/>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
