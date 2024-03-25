import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="sticky top-0 z-10">
            <div className="navbar bg-base-100 w-[85%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Listed Books</a></li>
                    <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Book World</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/books'}>Listed Books</Link></li>
                    <li><Link to={'/page'}>Pages to Read</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn btn-success">Sign In</a>
                <a className="btn btn-info">Sign Up</a>
            </div>
        </div>
        </div>
    );
};

export default Nav;