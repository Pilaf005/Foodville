"use client";

import React from "react";
import { CartButton, WishlistButton, ProfileButton } from "../actions";

export const NavbarActions = () => {
  return (
    <div className="flex items-center gap-1.5 ml-auto shrink-0">
      <WishlistButton />
      <ProfileButton />
      <CartButton />
    </div>
  );
};

export default NavbarActions;
