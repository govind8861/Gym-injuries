import React from 'react'
import './Footer.css'
const Footer = () => {
	return (
		<div className=''>
			<footer class="app-footer container-fluid p-5">
                <div className='row'>
				<div class="footer-logo col-md-5">
					<img src="/assets/GymLogo.jpg" alt="App Logo" className="ms-1" />
					<span className="ms-3 h4 " style={{ fontWeight: 'bold' }}>
						Fit Guard
					</span>

					<span className="d-block mt-4 textSpace">
						"Stay ahead in your fitness game with FitGuard<br /> – your ultimate
						 companion for injury insights<br/> and tailored workout
						recommendations."
					</span>
				</div>
              
				<div class="footer-links col-md ">
					<h3>The Company</h3>
					<ul>
						<li>
							{' '}
							<i class="fa fa-chevron-right"></i>&nbsp;
							<a href="/">Home</a>
						</li>
						<li>
							{' '}
							<i class="fa fa-chevron-right"></i>&nbsp;
							<a href="/about">About</a>
						</li>
						<li>
							{' '}
							<i class="fa fa-chevron-right"></i>&nbsp;
							<a href="/medical">Medical</a>
						</li>
						<li>
							{' '}
							<i class="fa fa-chevron-right"></i>&nbsp;
							<a href="/injury">Terms & Conditions</a>
						</li>
						<li>
							{' '}
							<i class="fa fa-chevron-right"></i>&nbsp;
							<a href="/injury">Feedbacks</a>
						</li>
						<li>
							{' '}
							<i class="fa fa-chevron-right"></i>&nbsp;
							<a href="/injur">Contact</a>
						</li>
					</ul>
				</div>
				<div class="footer-contact col-md">
					<p className='mb-5 h4'>Contact Info:</p>
					<p>Email: govindmaurya8699@gmail.com</p>
					<p>City: Jalandhar</p>
					<p>State: Punjab</p>
				</div>
                </div>
<div className='row'>
    <div className='col-md-4'></div>
            <div className='foot col-md-4 mt-4 '>
            <ul >
                <li><i className='fa fa-2x fa-facebook'></i></li>
                <li><i className='fa fa-2x fa-twitter'></i></li>
                <li><i className='fa fa-2x fa-instagram'></i></li>
                <li><i className='fa fa-2x fa-google'></i></li>
            </ul>
            </div>
            </div>
			</footer>
		</div>
	)
}

export default Footer
