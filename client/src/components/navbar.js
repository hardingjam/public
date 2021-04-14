import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <section id="navbar-container">
            <div className="navbar">
                <p>
                    <Link to="/">Profile</Link>
                </p>
                <p>
                    <Link to="/find">People</Link>
                </p>
                <p>
                    <Link to="/friends">Friends</Link>
                </p>
                <p>
                    <a href="/logout">Log Out</a>
                </p>
            </div>
        </section>
    );
}
