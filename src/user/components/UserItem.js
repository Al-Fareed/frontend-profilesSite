import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";
import "./UserItem.css";
const UserItem = (props) => {
  return (
    <li className="user-item">
      <>
        {/* This ia a component for making card like things */}
        <Card className="user-item__content" >
          {/* This (Link Tag) is the alternative of anchor tag which here this tag will restrict to reload the page */}
          <Link to={`/${props.id}/places`}>
            <div className="user-item__image">
              <Avatar image={props.image} alt={props.name} />{" "}
              {/** To display images with round corner */}
            </div>
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount}
                {props.placeCount === 1 ? " Place" : " Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </>
    </li>
  );
};
// App.js>>Users.js>>UserList.js>>this..
export default UserItem;
