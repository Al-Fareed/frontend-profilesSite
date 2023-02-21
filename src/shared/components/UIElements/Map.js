import React, { useRef, useEffect } from "react";
import "./Map.css";
const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  // useEffect is the hook used to execute whenever the value of the variable is changed
  // useRef is used to acces the dom element, Here we are using this whenever the values of center and zoom changes it re-renders
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
