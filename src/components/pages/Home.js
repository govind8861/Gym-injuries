import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<>
			<hero>
				<div className="hero">
					<div className="hero-content">
						<h1 className="fonth1">Your Fitness, Our Priority</h1>
						<p>
							Train smart, train safe with our expert injury prevention system.
						</p>
						<button className="cta-button rounded">Start Your Journey</button>
					</div>
				</div>
			</hero>
			<div className=" container mt-3">
				<div>
					<h2 className="h1 p-3">How It Works?</h2>
					<p className="">
						Our expert system makes injury assessment simple. Here's how:
					</p>
				</div>
				<div class="row">
					<div class="col-sm">
						<div class="shadow p-4">
							<div class="card-body">
								<img
									src="/assets/img/desc1.png"
									class="card-img-top "
									alt="..."
								/>
								<p class="card-text mt-3 ms-3">
									<strong>1) Describe Your Injury:</strong> <br />
									Provide a brief description of your symptoms.
								</p>
							</div>
						</div>
					</div>
					&#10140;
					<div class="col-sm">
						<div class="shadow p-4">
							<div class="card-body">
								<img
									src="/assets/img/submit.jpg"
									class="card-img-top"
									alt="..."
								/>
								<p class="card-text mt-3 ms-3">
									<strong>2) Submit & Get Insights:</strong> <br />
									Click "Get Answer" and receive potential injury insights.
								</p>
							</div>
						</div>
					</div>
					&#10140;
					<div class="col-sm">
						<div class="shadow p-4">
							<div class="card-body">
								<img
									src="/assets/img/response.png"
									class="card-img-top"
									alt="..."
								/>
								<p class="card-text mt-3 ms-3">
									<strong>3) Understand the Response:</strong> <br />
									Read the response to learn about possible causes.
								</p>
							</div>
						</div>
					</div>
					&#10140;
					<div class="col-sm">
						<div class="shadow p-4">
							<div class="card-body">
								<img
									src="/assets/img/action.jpg"
									class="card-img-top"
									alt="..."
								/>
								<p class="card-text mt-3 ms-3">
									<strong>4) Take Action:</strong> <br />
									Follow suggested steps or consult a professional if needed
								</p>
							</div>
						</div>
					</div>
				</div>
			<div class="injury-input-section mt-5">
				<h2 class="section-title">Discover Personalized Solutions</h2>
				<p class="section-description">
					Answer a few questions about your injury to get expert insights.
				</p>
				<hr class="section-divider" />
				<Link to="/medical" class="get-started-link ">
					Get Started
				</Link>
			</div>
			</div>
		</>
	)
}

export default Home
