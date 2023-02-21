import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group"; //For transition in side drawer
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
  // eslint-disable-next-line
  {/** Here we are creating new portal that is rendered outside the DOM,drawer-hook is the id of the other div element in index.html (different hierarchy)*/}
};

export default SideDrawer;
