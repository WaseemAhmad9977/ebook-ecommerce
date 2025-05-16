import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home';
import Login from "./components/Login"
import Signup from "./components/Signup"
import AdminLayout from './components/Admin/AdminLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
import Ebook from './components/Admin/Ebook';
import Setting from './components/Admin/Setting';

 
const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
         <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='ebook' element={<Ebook/>}/>
             <Route path='setting' element={<Setting/>}/>
         </Route>
        <Route path='/*' element={<h1>page not found</h1>}></Route>
  
      </Routes>
    </BrowserRouter>
    
  )
}

export default App