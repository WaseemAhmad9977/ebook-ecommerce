import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
  

   <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <nav className="bg-black text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">eBook</h1>
          <div className="space-x-6 text-lg">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section>
        <Outlet/>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 text-sm">
          
          {/* About */}
          <div>
            <h2 className="font-bold text-lg mb-2">eBook</h2>
            <p>Your favorite platform for eBooks. Read, learn, and grow every day with us.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/signup" className="hover:underline">Signup</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:underline">Refund Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs py-4 bg-black bg-opacity-10">
          &copy; {new Date().getFullYear()} eBook. All rights reserved.
        </div>
      </footer>
    </div>
  );

}

export default Layout
