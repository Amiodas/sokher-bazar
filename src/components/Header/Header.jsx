import React from "react";
import { Navbar } from "react-bootstrap";
import { BsHandbagFill } from "react-icons/bs";
import { BsCart2, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="container">
      <Navbar.Brand>
        <Link to="/" className="text-decoration-none">
          <h3>
            <BsHandbagFill className="text-primary me-2 mb-2" />
            <span className="text-primary">Sokher</span>{" "}
            <span className="text-warning">Bazar</span>
          </h3>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="me-4">
          <Link to="/shop" className="text-decoration-none">
            Shop
          </Link>
        </Navbar.Text>
        <Navbar.Text className="me-4">
          <Link to="/orders" className="text-decoration-none">
            Orders
          </Link>
        </Navbar.Text>
        <Navbar.Text className="me-4">
          <Link to="/favorite" className="text-decoration-none">
            <BsHeart />
          </Link>
        </Navbar.Text>
        <Navbar.Text className="me-4">
          <Link to="/cart" className="text-decoration-none">
            <BsCart2 />
          </Link>
        </Navbar.Text>
        <Navbar.Text className="me-4">
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/register" className="text-decoration-none">
            Sign Up
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
