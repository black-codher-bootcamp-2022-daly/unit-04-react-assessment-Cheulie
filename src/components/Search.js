
// // import React from "react";
// // import PropTypes from "prop-types";

// // export const Search = (props) => {
// //   const { keyword, setKeyword, handleSubmit } = props;

// //   function handleChange(changeEvent) {
// //     setKeyword(changeEvent.target.value);
// //   }

// //   function onSubmit(event) {
// //     event.preventDefault()
// //     handleSubmit(keyword)
// //   } 

// //   return (
// //     <form>
// //       <p style={{ color: "red" }}>
// //         <em>{keyword && "Keywords Typed: " + keyword}</em>
// //       </p>
// //       <input type="text" value={keyword} onChange={handleChange} />
// //       <input type="submit" onClick={onSubmit} />
// //     </form>
// //   );
// // };

// // Search.propTypes = {
// //   keyword: PropTypes.string,
// //   setKeyword: PropTypes.func,
// //   handleSubmit: PropTypes.func,
// // };

// const Search = ({keyword, onChange}) => {
//   const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
//   return (
//     <input 
//      style={BarStyle}
//      key="search-bar"
//      value={keyword}
//      placeholder={"search itunes"}
//      onChange={(e) => onChange(e.target.value)}
//     />
//   );
// }

// export default SearchBar;