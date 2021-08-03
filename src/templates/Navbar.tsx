import React from "react";

import Link from "next/link";

import { Logo } from "../components/logo/Logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <div
        className="bg-gray-2400 flex flex-row justify-between  topnav"
        id="myTopnav"
      >
        <div className="p-5">
          <Logo />
        </div>
        <div className="flex flew-row justify-end p-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/solution">
            <a>Our Solution</a>
          </Link>
          <Link href="/team">
            <a>Team</a>
          </Link>
          <Link href="/team">
            <a>Contact</a>
          </Link>

          <a href="" className="icon">
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .topnav {
            overflow: hidden;
          }

          .topnav a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }

          .topnav a:hover {
            background-color: #ddd;
            color: black;
          }

          .topnav a.active {
            background-color: #04aa6d;
            color: white;
          }

          .topnav .icon {
            display: none;
          }
          @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {
              display: none;
            }
            .topnav a.icon {
              float: right;
              display: block;
            }
          }

          @media screen and (max-width: 600px) {
            .topnav.responsive {
              position: relative;
            }
            .topnav.responsive a.icon {
              position: absolute;
              right: 0;
              top: 0;
            }
            .topnav.responsive a {
              float: none;
              display: block;
              text-align: left;
            }
          }
        `}
      </style>
    </nav>
  );
};
export default Navbar;
