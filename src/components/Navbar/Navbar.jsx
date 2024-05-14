import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../utils/constants";
import Button from "../../ui/Button";

const Navbar = () => {
  return (
    <nav className="h-[60px] bg-white fixed w-full items-center flex">
      <div className="flex items-center w-[60%] m-auto justify-between">
        <div className="flex w-[50%] items-center justify-between">
          <Link to="/">
            <div>
              <img
                src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg"
                alt=""
              />
            </div>
          </Link>
          <div className="flex items-center w-[50%] gap-3 mx-5">
            {navLinks.map((link) => (
              <Link to={link.path} key={link.id}>
                <div>{link.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-[30%] gap-3">
          <Link to="/login">
            <Button primaryColor={"#285df5"} borderColor={"#285df5"}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button primaryColor={"white"} backgroundColor={"#f05537"}>
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
