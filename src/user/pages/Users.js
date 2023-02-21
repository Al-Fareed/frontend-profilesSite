import React from "react";
import UsersList from "../components/UsersList";
const Users = props => {
  const person = [
    {
      id: "u1",
      name: "Billu",
      image:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      place: 3 ,
    },
    {
      id:"u2",
      name:"Boora",
      image:"https://images.pexels.com/photos/12360588/pexels-photo-12360588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      place:1,
    }
  ];
  return <UsersList items={person} />;
};
// App.js>>this..>>UsersList>>UserItem
export default Users;
