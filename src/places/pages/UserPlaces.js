import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';
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
      title: 'New State Building',
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
//   Creating a dummy places 
const UserPlaces = () => {
  const userId=useParams().userId;  //the userId is from App.js used for dynamically routing.
  const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator === userId) //filtering the places using the creator name from DUMMY_PLACES 
  return (
    // sending dummy places to Placelist for styling and displaying
    <>
    <PlaceList items={loadedPlaces}/>
    </>
  )
};
// here userId is from App.js which is directly accessible to this component and it is used in url link routing
export default UserPlaces;