import React,{useState} from "react";
import Card from "../UIElements/Card";
import "./Auth.css";
import { useForm } from "../../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../../shared/components/util/validators";
import Input from "../../components/FormElements/Input";
import Button from "../../components/FormElements/Button";
const Auth = () => {
  const [formState, inputHandler,setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const [isLoginMode,setIsLoginMode]=useState(true);

const authSubmitHandler=(event)=>{
  event.preventDefault();
  console.log(formState.inputs);
}

const sigunModeHandler = ()=>{
  if(!isLoginMode){
    setFormData({
      ...formState.inputs,
      name:undefined
    },
    formState.inputs.email.isValid && formState.inputs.password.isValid
    );
  }
  else{
    setFormData({
      ...formState.inputs,
      name:{
        value:'',
        isValid:false
      }
    },false);
  }
  setIsLoginMode(prevMode=>!prevMode);
}
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && <Input
          element="input"
          id="name"
          type="text"
          label="Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid name"
          onInput={inputHandler}
        />}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid e-mail"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
        {isLoginMode ? "LOGIN" : "SIGN UP"}
        </Button>
      </form>
      <Button inverse onClick={sigunModeHandler}>{isLoginMode ? "SIGN UP" : "LOGIN"}</Button>
    </Card>
  );
};

export default Auth;
