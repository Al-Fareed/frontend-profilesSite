import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import Map from "../../shared/components/UIElements/Map";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";
const PlaceItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext); //calling function from auth-js to check whether user has logged in

  // Receives all the place details as props and displays

  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMap(true);
  // Functions for opening and closing map
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteWarningHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteWarningHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${props.id}`,
        "DELETE"
      );
      props.onDelete(props.id);
    } catch (error) {}
  };
  return (
    <React.Fragment>
      {/* A pop-up for displaying map */}
      <ErrorModal error = {error} onClear ={clearError}/>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-action"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        {" "}
        {/* Button is sent as props to modal to close the popping up map */}
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />{" "}
          {/* Map component recieving the coordinate to display pin at the middle of the pop-up */}
        </div>
      </Modal>
      {/* end of Model / pop-up */}
      {/* A modal that pop up to confirm whether the user wants to delete  */}
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteWarningHandler}
        header="Are you sure?"
        footerClass="place-item__modal-action"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteWarningHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you want to proceed and remove this place?</p>
      </Modal>
      {/*to confirm from the user whether he is sure to delete */}

      <li className="place-item"> {/*To list all the places of that users*/}
        <Card className="place-item__content"> {/*To display in card */}
        {isLoading && <LoadingSpinner asOverlay/>}
          <div className="place-item__image"> {/**For image display */}
            <img src={`http://localhost:5000/${props.image}`} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.userId === props.creatorId && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.userId === props.creatorId && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
