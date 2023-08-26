import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<nav>
			<Link to="/" className="title">
				<img
					src="/assets/GymLogo.jpg"
					style={{ height: '50px', width: '50px', borderRadius: '5px' }} alt =" &#8634;"
				></img>
				<span className="ms-3 ">Fit Guard</span>
			</Link>
			<div
				className="menu"
				onClick={() => {
					setOpenMenu(!openMenu)
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul
				className={openMenu ? 'open' : ''} style={{marginRight:'8px'}}
				onClick={() => {
					setOpenMenu(false)
				}}
			>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/medical">Medical Disclosure</NavLink>
				</li>
				<li>
					<NavLink to="/feedback">Feedback</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
				<li>
					<NavLink to="/user"><i className='fa fa-user' ></i>&nbsp;&nbsp;User</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Header
