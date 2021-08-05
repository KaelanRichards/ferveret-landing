/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import Link from "next/link";

import { Logo } from "../components/logo/Logo";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="sticky top-0">
      <div className="bg-gray-2400 flex flex-row justify-between ">
        <div className="p-8 pl-6">
          <Logo />
        </div>
        <div className="flex flew-row items-center justify-end w-full p-4">
          <ul className={`nav-menu ${active ? "active" : ""}`}>
            <li className="nav-item">
              <Link href="/">
                <a onClick={() => setActive(false)} className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/solution">
                <a onClick={() => setActive(false)} className="nav-link">
                  Our Solution
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/team">
                <a onClick={() => setActive(false)} className="nav-link">
                  Team
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/team">
                <a onClick={() => setActive(false)} className="nav-link">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div
            className={`hamburger ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hamburger {
            display: none;
          }

          .bar {
            display: block;
            width: 25px;
            height: 3px;
            margin: 5px auto;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            background-color: #ffffff;
          }
          .nav-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-item {
            margin-left: 1rem;
          }

          .nav-link {
            font-size: 1rem;
            font-weight: 400;
            color: #ffffff;
          }

          .nav-link:hover {
            color: #a0aec0;
          }

          .nav-logo {
            font-size: 2.1rem;
            font-weight: 500;
            color: #482ff7;
          }
          @media only screen and (max-width: 768px) {
            .nav-menu {
              position: fixed;
              left: -100%;
              top: 5rem;
              flex-direction: column;
              background-color: #000;
              width: 100%;
              border-radius: 10px;
              text-align: center;
              transition: 0.3s;
              box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            }

            .nav-menu.active {
              left: 0;
            }

            .nav-item {
              margin: 2.5rem 0;
            }

            .hamburger {
              display: block;
              cursor: pointer;
            }

            .hamburger.active .bar:nth-child(2) {
              opacity: 0;
            }

            .hamburger.active .bar:nth-child(1) {
              transform: translateY(8px) rotate(45deg);
            }

            .hamburger.active .bar:nth-child(3) {
              transform: translateY(-8px) rotate(-45deg);
            }
          }
        `}
      </style>
    </nav>
  );
};
export default Navbar;
