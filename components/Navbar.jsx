/* eslint-disable */
'use client';

import Link from "next/link";
import { Service } from "../sections";

const Navbar = () => (
  <nav className="">
   
    <div className="flex justify-between  text-white ">

      <button type="button" className="">
      <img src='/main_logo.svg' className="w-2/3" alt='logo'/>
      </button>
      <div className="flex gap-11 self-center">
        <a href='#Service' className="nav_buttons" type="button">Our Services</a>
        <a href='#Growth' className="nav_buttons" type="button">The Growth Blueprint</a>
        <a href="#FAQ" className="nav_buttons" type="button">FAQ</a>

      </div>
      <div className="self-center">
<a href="#Contact" className="started_button" type="button">

Get Started
</a>
    </div>
    </div>
    {/* <section id='Service'>
      <Service />
    </section> */}
    
  </nav>
);

export default Navbar;
