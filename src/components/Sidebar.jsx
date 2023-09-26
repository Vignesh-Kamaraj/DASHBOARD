import React from "react";
function Sidebar() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between align-items-center align-items-sm-start px-3 pt-1 text-white">
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0  align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item ">
                    <a href="#" className="nav-link align-middle px-0">
                    <i className="fas fa-light fa-house-medical ms-1 d-sm-inline d-md-none" style={{ color: "#0b63f8" }}></i>
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#0b63f8" }}
                      >
                        Medico Sales
                      </span>
                    </a>
                  </li>
                  <li className="pt-3 act">
                    <a href="#submenu1" className="nav-link align-middle px-0">
                      <i
                        className="bi bi-grid"
                        style={{ color: "#0b63f8" }}
                      ></i>{" "}
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#0b63f8" }}
                      >
                        Dashboard
                      </span>{" "}
                    </a>
                  </li>
                  <li className="pt-2 act">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i
                        className="fas fa-solid fa-calendar-check"
                        style={{ color: "#9ea0a3" }}
                      ></i>{" "}
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#9ea0a3" }}
                      >
                        Lab Test
                      </span>
                    </a>
                  </li>
                  <li className="pt-2 act">
                    <a href="#submenu2" className="nav-link px-0 align-middle ">
                      <i
                        className="fas fa-solid fa-business-time"
                        style={{ color: "#9ea0a3" }}
                      ></i>
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#9ea0a3" }}
                      >
                        Appoinment
                      </span>
                    </a>
                  </li>
                  <li className="pt-2 act">
                    <a href="#submenu3" className="nav-link px-0 align-middle">
                      <i
                        className="fas fa-light fa-bag-shopping"
                        style={{ color: "#9ea0a3" }}
                      ></i>
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#9ea0a3" }}
                      >
                        Medicine Order
                      </span>{" "}
                    </a>
                  </li>
                  <li className="pt-2 act">
                    <a href="#submenu3" className="nav-link px-0 align-middle">
                      <i
                        className="fas fa-thin fa-envelope"
                        style={{ color: "#9ea0a3" }}
                      ></i>
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#9ea0a3" }}
                      >
                        Message
                      </span>{" "}
                    </a>
                  </li>
                  <li className="pt-2 act">
                    <a href="#submenu3" className="nav-link px-0 align-middle">
                      <i
                        className="fas fa-regular fa-wallet"
                        style={{ color: "#9ea0a3" }}
                      ></i>
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#9ea0a3" }}
                      >
                        Payment
                      </span>{" "}
                    </a>
                  </li>
                  <li className="pt-2 act">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i
                        className="fas fa-fw fa-cog"
                        style={{ color: "#9ea0a3" }}
                      ></i>
                      <span
                        className="ms-1 d-none d-md-inline"
                        style={{ color: "#9ea0a3" }}
                      >
                        Settings
                      </span>{" "}
                    </a>
                  </li>
                </ul>
        <div className="active pb-5 pr-2">
          <a href="#" className="nav-link px-0 align-middle">
            <i className="fas fa-solid fa-question"></i>
            <span className="ms-1 d-none d-md-inline">Help</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
