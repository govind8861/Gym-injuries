import React, { useState } from 'react'

function Contact() {
	const initialFormData = {
		name: '',
		email: '',
		subject: '',
		message: '',
	  };

	const [formData, setFormData] = useState(initialFormData)

	
	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		// You can add your form submission logic here
		console.log('Form submitted with data:', formData)
		alert("your query has been submitted")
		setFormData(initialFormData)
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 ">
					<h2 className='my-3'>Contact Us</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-group ">
							<label>Name:</label>
							<input
								type="text"
								className="form-control"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<label>Email:</label>
							<input
								type="email"
								className="form-control"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<label>Subject:</label>
							<input
								type="text"
								className="form-control"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<label>Message:</label>
							<textarea
								className="form-control"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
						</div>
						<button type="submit" className="cta-button m-3 d-block mx-auto">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
