import React, { use } from 'react';
import { links } from '../Header/Navbar';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    const { user } = use(AuthContext);
    return (
        <div>
            <footer className="footer flex flex-col md:footer-horizontal footer-vertical footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="">
                    <div className=" md:navbar-center  lg:flex">
                        <ul className="menu md:menu-horizontal px-1 md:flex gap-4 items-center">
                            {links}
                            {
                                user ?
                                    <li className='text-base'><NavLink to={'/auth/profile'}>Profile</NavLink></li>
                                    : <li className='text-base'><NavLink to={'/auth/register'}>Register</NavLink></li>
                            }
                        </ul>
                    </div>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/snjoy.420" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/snjoy420" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.867 0-2.153 1.459-2.153 2.968v5.699h-3v-10h2.879v1.367h.041c.401-.762 1.379-1.563 2.837-1.563 3.033 0 3.594 1.996 3.594 4.592v5.604z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/ShahriarTWS" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.604-2.665-.304-5.467-1.332-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.513 11.513 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.216.694.825.576 4.765-1.588 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        {/* X (Twitter) */}
                        <a href="https://x.com/snjoy420" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M22.162 1.658h-3.447l-5.288 7.51-5.568-7.51h-4.144l7.676 10.323-8.13 11.36h3.447l5.716-8.024 5.944 8.024h4.162l-8.23-11.11 8.562-11.573z" />
                            </svg>
                        </a>
                    </div>

                    <div className='flex gap-2 flex-col md:flex-row text-primary mt-2'>
                        <Link to={'/info/privacy-policy'} className='hover:underline underline-offset-2'>Privacy Policy</Link>
                        <Link to={'/info/terms&conditions'} className='hover:underline underline-offset-2'>Terms and Conditions</Link>

                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;