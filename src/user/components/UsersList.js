import React from "react";
import "./UsersLIst.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
const UsersList = (props) => {
  // This code chaecks for whether users (referred to as item) is empty
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          {/* Displays that users not found because length is 0 */}
          <h2>No users found!</h2>{" "}
        </Card>
      </div>
    );
  }
  //If Users exist more than 0 they are recieved as Props and mapped by again sending it as
  //props to UserItem.js
  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places.length}
          />
        );
      })}
    </ul>
  );
};
// App.js>>Users.js>>this..>>UserItem
export default UsersList;
