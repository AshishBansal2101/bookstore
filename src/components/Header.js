import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="tp">
        <div class="hero">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> Book store</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        {/* <h1>File Upload And Download</h1> */}

        <nav>
          <NavLink activeClassName="active" to="/" exact={true}>
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/list">
            Books List
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
