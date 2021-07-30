import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { objList } = props;

  //this is wrong... it shoul render the tiles.
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      {objList.map((obj, i) => (
        <Tile key={i} obj={obj} />
      ))}
    </div>
  );
};
