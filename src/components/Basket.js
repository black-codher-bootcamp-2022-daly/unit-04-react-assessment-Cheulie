import { Product } from './Product';
import React, { useState } from "react";

export const Product = ({track}) => {


  
  function addTrack () {
  };

  return (
    <div>
        <h2>{tracks.length}</h2>
        {tracks.map((track) => track.artistName) }
        {tracks.map((track) => (   trackName          <Track
                key={track.id}
                track={track}
                handleClick={() => addTrack (track)}

              />
)) }


    </div>
  );
};