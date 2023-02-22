import React, { useReducer,useEffect } from "react";
import "./Input.css";
import { validate } from "../util/validators";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
      case "TOUCH":
        {
          return{
            ...state,
            isTouched:true
          }
        }
    default:
      return state; // if changes occur and we dont mention in switch what to do, then just return state
  }
};

const Input = (props) => {
   // inputState is the state and dispatch is the funtion used to update the function which will inputReducer
  // Function useReducer has 2 arguement one is the inputReducer to manage the state, the other arg is to set inital value
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initalValue || '',
    isTouched:false,
    isValid: props.initalIsValid || false
  });
  const { id,onInput }=props;
  const { value,isValid}=inputState;
  useEffect(()=>{
    onInput(id,value,isValid)
  },[id,onInput,value,isValid]);
 

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    }); //val is  from inputReducer
  };

  const touchHandler = () =>{
    dispatch({
      type:"TOUCH"
  });
  }

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );
  // The variable element checks the recieved props whether type is input or textarea and assigns their respective props to them
  return (
    <div
      className={`form-control ${!inputState.isValid && inputState.isTouched && "form-control--invalid"}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
      {/* This is either input or Textarea that decides on the basis of the props recieved */}
    </div>
  );
};
// When onChange event occurs it calls changeHandler where dispatch is called and the value at the input field is updated
// So inputReducer is called and and it changes the value to the latest value and changes the state(isValid ) to true
export default Input;
