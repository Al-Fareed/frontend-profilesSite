import React from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from '../../shared/components/FormElements/Button';

const PlaceList = (props) => {
  // If no places are found then display this
  if (props.items.length === 0) {
    return (
      <div className="place-list-center">
        <Card>
          <h2>No Places found, Create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    // If found then passses to Placeitem component by mapping it
  <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete = {props.onDeletePlace}
        />

      ))}
    </ul>
  );
};

export default PlaceList;
