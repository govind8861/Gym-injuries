import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ScrollToTopLink from './ScrollToTop'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<nav>
			<Link to="/" className="title">
				<img
					src="/assets/GymLogo.jpg"
					style={{ height: '50px', width: '50px', borderRadius: '5px' }}
					alt=" &#8634;"
					onClick={() => window.scrollTo(0, 0)}
				></img>
				<span className="ms-3 " onClick={() => window.scrollTo(0, 0)}>
					Fit Guard
				</span>
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
				className={openMenu ? 'open' : ''}
				style={{ marginRight: '8px' }}
				onClick={() => {
					setOpenMenu(false)
				}}
			>
				<li>
					<ScrollToTopLink to="/" activeClassName="active">
						Home
					</ScrollToTopLink>
				</li>
				<li>
					<ScrollToTopLink to="/about" activeClassName="active">
						About
					</ScrollToTopLink>
				</li>
				<li>
					<ScrollToTopLink to="/medical">Medical Disclosure</ScrollToTopLink>
				</li>
				<li>
					<ScrollToTopLink to="/feedback">Feedback</ScrollToTopLink>
				</li>
				<li>
					<ScrollToTopLink to="/contact">Contact</ScrollToTopLink>
				</li>
				<li>
					<ScrollToTopLink to="/user">
						<i className="fa fa-user"></i>&nbsp;&nbsp;User
					</ScrollToTopLink>
				</li>
			</ul>
		</nav>
	)
}

export default Header
