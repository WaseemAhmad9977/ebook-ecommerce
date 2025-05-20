import 'animate.css';
import 'remixicon/fonts/remixicon.css';
import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound';
import AdminLayout from './components/Admin/AdminLayout'
import Dashboard from './components/Admin/Dashboard';
import Ebook from './components/Admin/Ebook'
import Setting from './components/Admin/Setting';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Otp from './components/Otp';

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ebook" element={<Ebook />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App