import React, { useEffect, useRef, useState } from 'react'
import './medical.css'
import { Bars } from 'react-loader-spinner'

const MedicalDisclosure = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [])

	const [userInput, setUserInput] = useState('')
	const [chatHistory, setChatHistory] = useState([])
	const chatHistoryRef = useRef(null) // Ref for chat history container

	const [isLoading, setIsLoading] = useState(false)

	const handleUserInput = event => {
		setUserInput(event.target.value)
	}
	useEffect(() => {
		if (chatHistoryRef.current) {
			chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight
			console.log(chatHistoryRef.current.scrollTop)
		}
	}, [chatHistory])

	const handleSubmit = () => {
		if (userInput.trim() !== '') {
			setIsLoading(true)
			// Process the user's input and generate a system response based on backward chaining logic
			setTimeout(() => {
				const systemResponse = generateSystemResponse(userInput) // Replace with your logic

				// Add the user's message and the system response to the chat history
				setChatHistory([
					...chatHistory,
					{ text: userInput, isUser: true },
					{ text: systemResponse, isUser: false },
				])
				setIsLoading(false)
				// Clear the user input
				setUserInput('')
			}, 1000)
		}
	}

	// Simulated function to generate system responses based on user input
	const generateSystemResponse = userInput => {
		// Replace this with your actual backward chaining logic
		if (userInput.includes('pain') || userInput.includes('discomfort')) {
			return "It sounds like you're experiencing some discomfort. Let me help you identify the issue."
		} else {
			return "I'm sorry, I couldn't understand your input. Please provide more details."
		}
	}
	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			event.preventDefault() // Prevent the form submission
			handleSubmit() // Manually trigger the button click event
		}
	}

	return (
		<div className="chat-interface">
			<div className="chat-history">
				{chatHistory.map((message, index) => (
					<div
						key={index}
						className={message.isUser ? 'user-message' : 'system-message'}
					>
						{message.text}
					</div>
				))}
			</div>
			<div className="input-container">
				<input
					type="text"
					placeholder="Type your message..."
					value={userInput}
					onChange={handleUserInput}
					onKeyDown={handleKeyPress} // Handle "Enter" key press
				/>
				<button onClick={isLoading ? null : handleSubmit}>
					{isLoading ? (
						<Bars
							height="30"
							width="30"
							color="#4fa94d"
							ariaLabel="bars-loading"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
						/>
					) : (
						'Send'
					)}
				</button>
			</div>
		</div>
	)
}

export default MedicalDisclosure
