function Productlist(props) {
    return (
      <div>
        <h1>Tammy's library</h1>
        <div className="productlist-container">{props.children}</div>
      </div>
    );
  }
  export default Productlist;