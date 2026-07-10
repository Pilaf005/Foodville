"use client";

import React from "react";
import { CartButton, WishlistButton, ProfileButton } from "../actions";

export const NavbarActions = () => {
  return (
    <div className="flex items-center gap-3 ml-auto shrink-0">
      <WishlistButton />
      <CartButton />
      <ProfileButton />
    </div>
  );
};

export default NavbarActions;
