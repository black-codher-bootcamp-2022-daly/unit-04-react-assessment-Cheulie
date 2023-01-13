import React from "react";
import PropTypes from "prop-types";


function Product (props) {


  return (
    <div
      style={{
        backgroundColor: "green",
        padding: "10px",
        marginBottom: "4px",
      }}
    >
      <ul>
      <h2>{props.product.artistName}</h2>
      <h2>{props.product.collectionName}</h2>
      <h2>{props.product.trackName}</h2>

      {/* <p>{props.track.volumeInfo?.description}</p> */}
  
      <img src={props.product.artworkUrl100} alt="artwork"/>
      <p>{props.product.trackPrice}</p>
      </ul>
      <button onClick={() => props.handleClick(props.id)}>Click to add song</button>
      <button onClick={() => props.handleClickRemove(props.id)}>Click to remove song</button>

</div>
  )
    };

// Product.propTypes = {
//   artistName: PropTypes.string,
//   collectionName: PropTypes.string,
//   trackName: PropTypes.string,

//   handleClick: PropTypes.func,
//   track: PropTypes.shape({
//     volumeInfo: PropTypes.shape({
//       artistName: PropTypes.string.isRequired,
//       collectionName: PropTypes.array.isRequired,
//       trackName: PropTypes.string.isRequired,
//     }),
   
//     }),
//   },
export default Product;