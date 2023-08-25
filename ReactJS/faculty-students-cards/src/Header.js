import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div class="col-1 p-1 m-2">
      <img
        src="https://www.darshan.ac.in/Content/media/DU_Logo.svg"
        className="img-fluid"
      />
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <div className="col">

        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active navbar-brand text-danger" to="/">
                  Faculty
                </Link>
                </li>
                <li class="nav-item">
                <Link
                  class="nav-link active navbar-brand text-danger"
                  to="/student"
                >
                  Students
                </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  id="searchText"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link
                    class="btn btn-outline-danger"
                    to="/search"
                  >
                    SearchFaculty
                </Link>
                
              </form>
            </div>
          </div>
        </nav>

      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div class="row header">
        <Logo />
        <Menu />
      </div>
    </>
  );
};

export default Header;
