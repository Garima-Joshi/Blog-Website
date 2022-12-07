import { Link } from "react-router-dom";

function Navbar(){
    const id=10;
    return(
        <div id="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-post">Create Post</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;