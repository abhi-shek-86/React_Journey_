import '../index.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div id='navbar'>
            <h3>Abhishek Solutions</h3>
            <div id='nav-buttons'>
                <Link to={"/Home"}><button>Home</button></Link>
                <Link to={"/About"}><button>About</button></Link>
                <Link to={"/Contact"}><button>Contact</button></Link>
            </div>
        </div>

    )
}

export default Navbar;