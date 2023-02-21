import React from "react";
import "./Modal.css";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom"; // *using {}->ReactDom,and imported from -> "react"

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>  {/**To display the address as header in pop-up */}
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault() //* not using ()for preventDefault function
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children} {/* This will display the Map */}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer} {/* To render button that is in footer recieved through props from PlaceItem */}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />} {/**First check whether the show props is true (showMap in PlaceItem) */}
      {/**onCancel is the function that is passed as props to parent component */}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
        {/**Forward all the props that we get from outside
         * it takes the props from Modal and passes it to ModalOverlay using spread operator(...)
         */}
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
