import React from "react";
import "./PlaceForm.css";
import Button from '../../shared/components/FormElements/Button';
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const NewPlace = () => {
 const [formState,inputHandler]=useForm({
  title: {
    value: '',
    isValid: false,
  },
  description: {
    value: '',
    isValid: false,
  },
  address: {
    value: '',
    isValid: false,
  },
 },false)



  const submitHandler = event =>{
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        type=""
        label="Title"
        element="input"
        placeholder="Title Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        type="textarea"
        label="Description"
        element="input"
        placeholder="Description"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Please enter a valid description of atleas 10 characters"
        onInput={inputHandler}
      />
      <Input
        id="address"
        type="text"
        label="Address"
        element="input"
        placeholder="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
