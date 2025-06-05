import 'animate.css';
import 'remixicon/fonts/remixicon.css';
 // ← toast styles

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import AdminLayout from './components/Admin/AdminLayout';
import Dashboard from './components/Admin/Dashboard';
import EbookAdmin from './components/Admin/Ebook';
import Setting from './components/Admin/Setting';
import Otp from './components/Otp';
import UserLayout from './components/User/UserLayout';
import EbookUser from './components/User/Ebook';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route element={<Layout/>}>
           <Route path="/" element={<Home />}/>
        </Route>

        <Route path="/app" element={<UserLayout />}>
           <Route path="ebook" element={<EbookUser/>} />
        </Route>
            

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ebook" element={<EbookAdmin />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route path="*" element={<NotFound />} />

       
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"   /* switch to "dark" if you prefer */
      />
    </BrowserRouter>
  );
};

export default App;
