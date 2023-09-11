import React from "react";
import Box from "../Box";
import LogoImage from "../LogoImage";
import ProfileDropDown from "./components/ProfileDropDown";

const Navbar = () => {
  return (
    <Box className="fixed top-0 w-full py-4 lg:px-10 sm:px-7 px-5 bg-white shadow-sm">
      <Box className="flex items-center justify-between">
        <LogoImage />
        <ProfileDropDown />
      </Box>
    </Box>
  );
};

export default Navbar;
