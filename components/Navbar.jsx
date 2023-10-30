/* eslint-disable */
'use client';

import Link from "next/link";

const Navbar = () => (
  <nav className="">
   
    <div className="flex justify-between  text-white ">

      <button type="button" className="">
      <img src='/main_logo.svg' className="w-2/3" alt='logo'/>
      </button>
      <div className="flex gap-11 self-center">
        <Link href='#Service' className="nav_buttons" type="button">Our Services</Link>
        <button className="nav_buttons" type="button">The Growth Blueprint</button>
        <button className="nav_buttons" type="button">FAQ</button>

      </div>
      <div className="self-center">
<button className="started_button" type="button">

Get Started
</button>
    </div>
    </div>
  </nav>
);

export default Navbar;
