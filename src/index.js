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
import SendMoneyScheduled from "./Pages/SendMoney/SendMoneyScheduled";
import RequestMoney from "./Pages/SendMoney/RequestMoney";
import AutoConversion from "./Pages/SendMoney/AutoConversion";
import TransactionMoney from "./Pages/SendMoney/TransactionMoney";

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
            <Route path='/sendMoneyScheduled' element={<SendMoneyScheduled/>}/>
            <Route path='/requestMoney' element={<RequestMoney/>}/>
            <Route path='/autoConversion' element={<AutoConversion/>}/>
            <Route path='/transactionMoney' element={<TransactionMoney/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
