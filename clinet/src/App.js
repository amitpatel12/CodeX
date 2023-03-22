
// import { Dashboard } from '@mui/icons-material';
import { useState } from 'react';
import './App.css';
import CombineEditor from './components/CombineEditor';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Output from './components/Output';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Register/Login';
import Show from './components/show/Show';
import Account from './components/account/Account';
// import Url  from './Url';


function App() {
  // console.log("hello", Url)
  const [savebtn, setSavebtn] = useState(false)
  console.log(savebtn)
  return (
    <BrowserRouter>
    <div className='container'>
      <Navbar savebtn = {savebtn} setSavebtn = {setSavebtn}/>
      {/* <Output/> */}
      <Routes>
        <Route path = '/dashboard' element = {<Dashboard setSavebtn = {setSavebtn}/>}/>
        <Route path = '/editor' element = {<CombineEditor/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/show/:id' element = {<Show/>}/>
        <Route path = '/account' element = {<Account/>}/>
      </Routes>
      </div>
      {/* <CombineEditor/> */}
    </BrowserRouter>
      
  );
}

export default App;
