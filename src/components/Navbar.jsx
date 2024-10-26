import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <section className="navsection">
                <div className="logo">
                    <h1> 🎓 Portfolio 🎓</h1>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
