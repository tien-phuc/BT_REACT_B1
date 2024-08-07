import React from "react";

export const Header = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-dark ">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              Start Boostrap
            </a>

            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
