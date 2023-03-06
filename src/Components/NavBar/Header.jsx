import { Link } from "react-router-dom";

export default function Header() {
  return (

  <div className="navbar bg-base-100 sticky-top">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'/'}>Home</Link></li>
        <li tabIndex={0}>
          <Link  className="justify-between">
            Career
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul style={{backgroundColor:'#EEEEEE'}} className="p-2">
            <li ><Link>Full Stack</Link></li>
            <li ><Link>Fornt End</Link></li>
            <li ><Link>Back End</Link></li>
          </ul>
        </li>
        <li><Link  to="/about">About</Link></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl flex"><i class='bx bxl-blender bx-md' style={{color:'#00adb5' }} ></i>RptN</Link>
  </div>
  <div className="navbar-center hidden lg:flex px-4">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'}>Home</Link></li>
      <li tabIndex={0}>
        <Link >
          Career
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul style={{backgroundColor:'#EEEEEE'}} className="p-2">
          <li><Link>Full Stack</Link></li>
          <li><Link>Fornt End</Link></li>
          <li><Link>Back End</Link></li>
        </ul>
      </li>
      <li><Link  to="/about">About</Link></li>
      <li><Link><i class='bx bx-search-alt'></i></Link></li>
    </ul>
  </div>
</div>
  )
}
