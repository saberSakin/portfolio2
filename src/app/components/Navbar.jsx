"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";


import {
  RiYoutubeLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";

import { TbBookDownload } from "react-icons/tb";

import { IoMailOutline } from "react-icons/io5";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
  
 
        
      <div style={{ display: 'flex' }}>
  <Link
    href={"https://www.facebook.com/54k1N"}
    target="blank"
    className="hover:text-accent transition-all duration-300"
    style={{ marginRight: '10px' }}
  >
    <RiFacebookLine />
  </Link>
  <Link
    href={"https://github.com/saberSakin"}
    target="blank"
    className="hover:text-accent transition-all duration-300"
    style={{ marginRight: '10px' }}
  >
    <RiGithubLine />
  </Link>
  <Link
    href={"https://www.instagram.com/saber.sakin/"}
    target="blank"
    className="hover:text-accent transition-all duration-300"
    style={{ marginRight: '10px' }}
  >
    <RiInstagramLine />
  </Link>
  <Link
    href={"https://www.linkedin.com/in/saber-sakin-287a70218/"}
    target="blank"
    className="hover:text-accent transition-all duration-300"
    style={{ marginRight: '10px' }}
  >
    <RiLinkedinLine />
  </Link>
  <Link
    href={"mailto:md.shakin18@gmail.com"}
    target="blank"
    className="hover:text-accent transition-all duration-300"
    style={{ marginRight: '10px' }}
  >
    <IoMailOutline />
  </Link>
</div>


     
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
