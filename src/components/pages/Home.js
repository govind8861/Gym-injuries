import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [])
	return (
		<>
			<div>
				<div className="hero">
					<div className="hero-content">
						<h1 className="fonth1">Your Fitness, Our Priority</h1>
						<p>
							Train smart, train safe with our expert injury prevention system.
						</p>
						<button className="cta-button rounded">
							<Link
								to="/medical"
								style={{ textDecoration: 'none', color: 'white' }}
							>
								Start Your Journey
							</Link>
						</button>
					</div>
				</div>
			</div>
			
			<div className=" container mt-3">
				<div>
					<h2 className="h1 p-3">How It Works?</h2>
					<p className="">
						Our expert system makes injury assessment simple. Here's how:
					</p>
				</div>
				<div className="row">
					<div className="col-sm">
						<div className="shadow p-4">
							<div className="card-body">
								<img
									src="/assets/img/desc1.png"
									className="card-img-top "
									alt="..."
								/>
								<p className="card-text mt-3 ms-3">
									<strong>1) Describe Your Injury:</strong> <br />
									Provide a brief description of your symptoms.
								</p>
							</div>
						</div>
					</div>
					&#10140;
					<div className="col-sm">
						<div className="shadow p-4">
							<div className="card-body">
								<img
									src="/assets/img/submit.jpg"
									className="card-img-top"
									alt="..."
								/>
								<p className="card-text mt-3 ms-3">
									<strong>2) Submit & Get Insights:</strong> <br />
									Click "Get Answer" and receive potential injury insights.
								</p>
							</div>
						</div>
					</div>
					&#10140;
					<div className="col-sm">
						<div className="shadow p-4">
							<div className="card-body">
								<img
									src="/assets/img/response.png"
									className="card-img-top"
									alt="..."
								/>
								<p className="card-text mt-3 ms-3">
									<strong>3) Understand the Response:</strong> <br />
									Read the response to learn about possible causes.
								</p>
							</div>
						</div>
					</div>
					&#10140;
					<div className="col-sm">
						<div className="shadow p-4">
							<div className="card-body">
								<img
									src="/assets/img/action.jpg"
									className="card-img-top"
									alt="..."
								/>
								<p className="card-text mt-3 ms-3">
									<strong>4) Take Action:</strong> <br />
									Follow suggested steps or consult a professional if needed
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="injury-input-section mt-5">
					<h2 className="section-title">Discover Personalized Solutions</h2>
					<p className="section-description">
						Answer a few questions about your injury to get expert insights.
					</p>
					<hr className="section-divider" />
					<Link to="/medical" className="get-started-link ">
						Get Started
					</Link>
				</div>
			</div>
		</>
	)
}

export default Home
