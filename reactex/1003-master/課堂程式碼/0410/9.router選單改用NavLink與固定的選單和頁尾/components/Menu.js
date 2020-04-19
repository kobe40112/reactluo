import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
      <a className="navbar-brand" href="#">
        路由測試
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              首頁
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              關於我們
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              to="/product"
              className="nav-link"
              activeClassName="active"
            >
              產品
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Menu
