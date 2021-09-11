import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';

const NavBar = ({auth:{isAuthenticated},logout}) => {
    const user = (
        <ul>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="/register?role=merchant">Become a Merchants</Link>
        </li>
        <li>
            <Link onClick={logout}to="#!">Logout</Link>
        </li>
    </ul>
    )
    const guest = (
        <ul>
        <li>
            <Link to="/register?role=merchant">Merchants</Link>
        </li>
        <li>
            <Link to="/register?role=customer">Register</Link>
        </li>
        <li>
            <Link to="/">Login</Link>
        </li>
    </ul>
    );
    return (
        <nav className="navbar bg-main">
            <h1>
                <Link to="">
                    <i className="fas re">e-Shop</i>
                </Link>
            </h1>
            {isAuthenticated ? user : guest}
        </nav>
    );
};

const mapStateToProps = state =>({
    auth:state.auth,
});
export default connect(mapStateToProps,{logout})(NavBar);