
import { Link } from "react-router-dom";


export default function Header (props) {
return <div id="navigation"><h1 className="title">Media store</h1>
<div>
    <Link  className="Link" to="/" id="home"> <h4>Home</h4></Link>
</div>
<div>
    <Link className="Link" to="/about" id="about"><h4>About </h4></Link> 
</div>
<div>
    <Link className="Link" to="/basket" id="basket"><h4>Basket:{props.itemCount}</h4></Link> 
</div>
</div>
}