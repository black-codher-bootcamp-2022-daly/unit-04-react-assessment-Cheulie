import React from "react";
import PropTypes from "prop-types";



export function Product(props) {


  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "10px",
        marginBottom: "4px",
      }}
    >
      <ul>
      <h2>{props.artistName}</h2>
      <h2>{props.collectionName}</h2>
      <h2>{props.trackName}</h2>

      <p>{props.track.volumeInfo?.description}</p>
      <h2></h2>
      <img src={props.artworkUrl100}/>
      </ul>
      <button onClick={() => props.handleClick(props.id)}>Click to add song</button>
      <button onClick={() => props.handleClickRemove(props.id)}>Click to remove song</button>



Product.propTypes = {
  artistName: PropTypes.string,
  collectionName: PropTypes.string,
  trackName: PropTypes.string,

  handleClick: PropTypes.func,
  track: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      collectionName: PropTypes.array.isRequired,
      trackName: PropTypes.string.isRequired,
    }),
   
    }),
  },
