import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytlogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { Cgclose } from "react-icons/cg";

import { Context } from "../context/contextApi";
// import Loader from "../shared/loader"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setmobileMenu } = useContext(Context);

  return <div>Header</div>;
};

export default Header;
