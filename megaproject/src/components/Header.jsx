import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Logoutbtn from "./Logoutbtn";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navitems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navitems.map((items) =>
              items.active ? (
                <li key={items.name}>
                  <button
                    onClick={() => navigate(items.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  ></button>
                </li>
              ) : null
            )}
            
            {authstatus && (<li>
              <Logoutbtn/>
            </li>)}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
