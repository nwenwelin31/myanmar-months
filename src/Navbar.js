import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch';


const Navbar = () => {
  const { data: months } = useFetch("https://json-server-snowy-pi.vercel.app/Months");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  if (months === null) {
    return <div>Loading...</div>;
  }
  return (
    <div id="wrapper" className={isSidebarOpen ? 'toggled' : ''}>
    <div className="overlay"></div>

    {/* Sidebar */}
    <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
      <ul className="nav sidebar-nav">
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <Link to="#">မြန်မာလများ</Link>
          </div>
        </div>
        {months.map(month => (

            <li key={month.id}>
            <Link to={`/months/${month.id}`}>
                    {month.MonthMm}
                </Link>
            </li>

        ))}
        {/* <li><Link to="#home">Home</Link></li>
        <li><Link to="#about">About</Link></li> */}
        {/* Add more sidebar links here */}
      </ul>
    </nav>

    {/* Page Content */}
    <div id="page-content-wrapper">
      <button type="button" className="hamburger animated fadeInLeft is-closed" onClick={toggleSidebar}>
        <span className="hamb-top"></span>
        <span className="hamb-middle"></span>
        <span className="hamb-bottom"></span>
      </button>
      {/* <div className="container">

      </div> */}
    </div>
  </div>
  )
}

export default Navbar
