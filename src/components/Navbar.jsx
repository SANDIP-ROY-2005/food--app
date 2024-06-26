import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { NavLink } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Footer from "./Footer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/reservation');
  }
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu =()=>{
    setOpenMenu(!openMenu)
  }
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <>
    {/* <button className="menu-button" onClick={toggleMenu}>
          {openMenu ? <CloseIcon/> : <MenuOpenIcon/>}
        </button> */}
    <nav  >
      <div className="nav-logo-container">
        <img src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg" alt="" />
      </div>
      <div className="navbar-links-container">
        {/* <button className="menu-button" onClick={toggleMenu}>
          {openMenu ? <CloseIcon/> : <MenuOpenIcon/>}
        </button> */}

      <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/"  ><p>HOME</p></NavLink>
        {/* <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/about" ><p>ABOUT US</p></NavLink> */}
       
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/menu"     ><p>Menu</p></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/work"    ><p>WORK</p></NavLink>
        {/* <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/contact" ><p>CONTACT</p></NavLink> */}
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/testimonial"     ><p>Testimonial</p></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/contact"   ><p>CONTACT</p></NavLink>
        {/* <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/testimonial" ><p>Testimonial</p></NavLink> */}
        
        
        <a href="">
        
          <BsCart2 className="navbar-cart-icon" />
        </a> 
        {/* <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/reservation" ><p>BOOKINGS</p></NavLink> */}
        <button  onClick={handleClick}className="primary-button" >Bookings Now</button>
        {/* <button   className="primary-button">Bookings Now</button> */}
        {/* <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/contact" ><p>CONTACT</p></NavLink> */}
        {/* <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/testimonial" ><p>Testimonial</p></NavLink> */}
        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    {/* <Footer/> */}
    </>
  );
};

export default Navbar;