import Link from "next/link";
import React from "react";
import CartList from "./cartList";

const Header = () => {
  return (
    <nav className="navbar justify-between bg-base-300">
      <Link href="/" className="btn text-lg">
        RJ Shoping
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link href="/cart">
            <CartList />
          </Link>
        </li>
        <li>
          <Link href="/Sign In">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
