import React from "react";

export const Tile = (props) => {
  const { obj } = props;

  const objValuesArray = Object.entries(obj);

  return (
    <div className="tile-container">
      {objValuesArray.map((value, i) => (
        <div>
          {i === 0 ? (
            <p className="tile-title">
              {" "}
              {value[0]}:{value[1]}{" "}
            </p>
          ) : (
            <p className="tile">
              {" "}
              {value[0]}:{value[1]}{" "}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
