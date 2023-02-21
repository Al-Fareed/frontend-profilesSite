// When user clicks on edit button in places page this page will be rendered

import React from "react";
import { useParams } from "react-router-dom";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
  } from "../../shared/components/util/validators";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import "./PlaceForm.css";

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return <div className="center">Could not find any place</div>;
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        label="Title"
        errorText="Please enter a valid title"
        onInput={()=>{}}
        value={identifiedPlace.title}
        validity={true}
      />
    <Input
        id="description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(10)]}
        label="Description"
        errorText="Please enter a valid description"
        onInput={()=>{}}
        value={identifiedPlace.description}
        validity={true}
      />
      <Button type="submit" disabled={true}>UPDATE</Button>
    </form>
  );
};

export default UpdatePlace;
