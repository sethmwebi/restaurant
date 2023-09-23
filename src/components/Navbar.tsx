import Link from "next/link";
import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 flex justify-between items-center p-4 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1 whitespace-nowrap">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 !bg-cover px-1 rounded-md ">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span className="bg-orange-300 pr-1 rounded-r-md">123 456 789</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
