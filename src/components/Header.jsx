import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <div><NavLink to="/">HomePage</NavLink></div>
                <div><NavLink to="/coursepage">CoursePage</NavLink></div>
                <div><NavLink to="/profilepage">ProfilePage</NavLink></div>
                <div><NavLink to="/paymentpage">PaymentPage</NavLink></div>
            </nav>
        </header>
    );
}

export default Header;
