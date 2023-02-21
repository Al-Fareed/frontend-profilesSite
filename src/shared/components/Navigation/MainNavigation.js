import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import NavLinks from "./NavLinks"; // importing Navlinks to substitute here
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
const MainNavigation = (props) => {
  const [drawerIsOpen,setDrawerIsOpen] = useState(false); //Holds a value that whether the side Navigation is open or not 

  const openDrawerHandler = ()=>{  
    //This function is triggered when side nav bar is clicked and made visible
    setDrawerIsOpen(true); 
  }

  const closeDrawerHandler = () =>{
    setDrawerIsOpen(false); //To close the drawer when touched outside the drawer
  }
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>} 
      {/** This element is used to just wrap the other two element, 
       * and calls function to close drawer on event of onclick which passed from sidedrawer to this component
       * (this component sends close function to SideDrawer  */}
     
     <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer> 

      <MainHeader>
        {/* menu button displayed in mobile view */}
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        {/* menu button ends */}
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
