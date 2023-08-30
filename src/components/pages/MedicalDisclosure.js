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
		chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight
		console.log(chatHistoryRef.current.scrollTop)
	}, [chatHistory])

	const handleSubmit = () => {
		if (userInput.trim() !== '') {
			setIsLoading(true)
			// Process the user's input and generate a system response based on backward chaining logic
			setTimeout(() => {
				const systemResponse = generateSystemResponse(userInput.toLowerCase()) // Replace with your logic

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
		const patternsAndResponses = [
			{
				patterns: [
					'hey',
					'hello',
					'helo','hii','hiii','hiiii','hi',
					'good morning',
					'good afternoon',
					'good evening','chat','support','introduction'
				],
				responses: [
					'Hello! How can I assist you today?',
					'Hey there! What can I do for you?',
					'Good day! How can I help?',
					'Hi! How can I be of service?',
					'Greetings! What can I assist you with?',
				],
			},
			{
				patterns:['how are you','well-being','feeling','health','status','mood'],
				responses:[
					<div className='col-md-10'>
						I'm just a computer program, so I don't have feelings, but I'm here and ready to help you with any questions or tasks you have. How can I assist you today?
					</div>
				]
			}
			,{
				patterns: ['pain','ache','issue','problem','soreness', 'discomfort', 'shoulder pain', 'shoulder issue','shoulder'],
				responses: [
					<div className="col-md-10">
						It sounds like you're experiencing some discomfort . Let me help you
						identify the issue.Are you feeling any of these : disturb sleep
						,dull ache deep in the shoulder or weakness in arms{' '}
					</div>,
				],
			},
			{
				patterns: ['yes', 'the pain', 'pain worse at night','pain confirmation','confirm pain','nighttime pain','pain intensification'],
				responses: [
					<div className="col-md-11">
						It sounds like you're experiencing deep pain in the shoulder .Are
						you able to sleep properly at night without heaving pain the
						shoulder or not?
					</div>,
				],
			},
			{
				patterns: [
					'weakness in arms',
					'weak arms',
					'arm weak','arm weakness','arms strength','arm power','inability','arm condition',				'arms are weak',
				],
				responses: [
					<div className="col-md-11">
						I'm sorry to hear that you're feeling weak in your arms. Let's work
						together to identify the possible causes of this weakness. Have you
						engaged in any activities recently that involve raising your arms
						overhead? This could include activities like lifting heavy objects,
						performing exercises, or even tasks that require reaching for items
						on high shelves. Please provide me with some more details so we can
						better understand your situation.{' '}
					</div>,
				],
			},
			{
				patterns: [
					'sleep disruption','sleep issues','sleep problems','sleep discomfort',
					'properly sleep',
					'pain get worse at night',
					'get worse at night',
					'disturb sleep',
				],
				response: [
					<div className="col-md-11">
						I'm sorry to hear that you're not able to sleep at night because of
						your shoulder pain.Your pain is not letting you sleep properly.can
						you tell me further so i should assist you accordingly.IF the pain
						is worse then it's better for you to seek medicals.I am here to help
						feel free to ask your question.{' '}
					</div>,
				],
			},

			{
				patterns: [
					'physical strain',
					'lifted weights',
					'gym exercises',
					'overhead exercise',
					'heavy objects',
					'high shelves',
					'shoulder exercises',
					'any strenuous activities',
					'causing weakness',
					'feeling weak',
					'experiencing weakness',
					'fatigued','overhead workouts','heavy object lifting','high shelf tasks','weakness due to strain'
				],
				response: [
					<div className="col-md-11">
						{' '}
						Thank you for sharing that. Let's dive deeper into your symptoms.
						Are you experiencing any pain or discomfort in your shoulder area?
						If so, can you describe the type of pain (dull ache, sharp pain,
						etc.) and its intensity?{' '}
					</div>,
				],
			},
			{
				patterns: [
					'dull ache','ache details',
					'yes i have dull ache in my shoulder',
					'ache in shoulder',
					'sharp pain',
					'pain in shoulder',
					'sharp pain in shoulder',
					'very pain',
					'high intensity',
					'high intensity pain','feeling sharp pain','pain characteristics',
					'feeling sharp pain in shoulder',
				],
				response: [
					<div className="col-md-11">
						<p>
							{' '}
							I appreciate the information. A dull ache in the shoulder could be
							indicative of various conditions. To further narrow down the
							possibilities, have you noticed if the pain worsens at night or
							when you perform certain movements with your arm?
						</p>
						<p>[Option 1: Pain worsens at night or with certain movements]</p>
						<p>
							[Option 2: Pain doesn't worsen at night or with movements]. Choose
							any one or provide yours...
						</p>
					</div>,
				],
			},
			{
				patterns: [
					'treatment of rotator cuff injury',
					'treatment of injury','rotator cuff treatmen','injury treatment','treatment options','treating injuries','healing methods','care for injuries',
					'option 1.2',
				],
				response: [
					<div className="col-md-11 d-block justify-content-evenly">
						{' '}
						<p>
							Treatment will depend on your symptoms and the length of time you
							have them. Your caregiver may want you to limit activity on your
							affected shoulder to decrease stress on the tendon. This may help
							prevent further damage, decrease pain, and promote tendon heal.
							The primary treatment is resting the shoulder and, for minor tears
							and inflammation, applying ice packs. You may need to wear a sling
							to keep the shoulder from moving .
						</p>
						<p>
							Anti-inflammatory medications may also be prescribed. As soon as
							pain decreases, physical therapy is usually started to help regain
							normal motion. If pain persists after several weeks, the physician
							may inject cortisone into the affected area.
						</p>
						<p>
							Surgery: If you have a large tear in your rotator cuff, you may
							need surgery to repair the tear. Sometimes during this kind of
							surgery, doctors may remove a bone spur or calcium deposits. The
							surgery may be performed as an open repair through a 6- to
							10-centimeter incision, or as an arthroscopic repair with the aid
							of a small camera inserted through a smaller incision. An
							arthroscope is used to view the shoulder joint and confirm the
							presence of a tear. It can also remove any bone spurs that may be
							present in the shoulder area. The arthroscopic procedures usually
							involves 2in incision in the outer shoulder. During this time the
							torn rotator edge may be reattached to the humerus with stitches.
						</p>
						<p>
							Arthroplasty: Some long-standing shoulder muscle tears may
							contribute to the development of rotator cuff arthropathy, which
							can include severe arthritis. In such cases, your doctor may
							discuss with you more extensive surgical options, including
							partial shoulder replacement (hemiarthroplasty) or total shoulder
							replacement (prosthetic arthroplasty). A unique treatment option
							now available involves the use of a reverse ball-and-socket
							prosthesis. This reverse shoulder prosthesis is most appropriate
							for people who have very difficult shoulder problems. These
							include having arthritis in the joint, along with extensive tears
							of multiple muscles and tendons (rotator cuff) that support the
							shoulder, or having extensive rotator cuff tears and a failed
							previous shoulder joint replacement.
						</p>
					</div>,
				],
			},
			{
				patterns: ['option 1.1','injury causes','causes of injuries','reasons for pain','injury origins','sources of discomfort'],
				response: [
					<div className="col-md-11">
						<h6>why rotator cuff injury happen?</h6>
						<p>
							Rotator Cuff Tear: A ripping of one or more of the tendons Result
							when a sudden eccentric force applied to the rotator cuff
							resulting in failure of the tendon. Uncommon under the age of 40
							but strains do occur. In the population over 40 years of age,
							supraspinatus tears occur and less commonly, infraspinatus tears.
							Tears in the subscapularis tendon are uncommon and are often the
							result of a shoulder dislocation.
						</p>
						<h6>Causes</h6>
						<p>
							Poor posture: When you slouch your neck and shoulders forward, the
							space where the rotator cuff muscles reside can become smaller.
							This can allow a muscle or tendon to become pinched under your
							shoulder bones, including your collarbone, especially during
							overhead activities, such as throwing. Falling: Using your arm to
							break a fall or falling on your arm can bruise or tear a rotator
							cuff tendon or muscle. Lifting or Pulling: Lifting an object
							that's too heavy, or doing so improperly (especially overhead) can
							strain or tear your tendons or muscles. Pulling something, such as
							an archery bow of too heavy poundage, may cause an injury.
						</p>
					</div>,
				],
			},
			{
				patterns: [
					'option 1','night pain','pain at night','pain worsening in evening','pain increase during nighttime',
					'pain worse at night',
					'yes the pain worst at night',
					'yes',
					'1',
				],
				responses: [
					<div className="col-md-11">
						{' '}
						<p>
							Thank you for sharing that. Your description aligns with some
							characteristics of a rotator cuff injury. The combination of a
							dull ache that worsens at night and discomfort when reaching
							behind your back can be concerning. These symptoms can be
							associated with a rotator cuff strain or tear. While I can't
							provide a definitive diagnosis, I recommend considering a medical
							evaluation to determine the cause of your discomfort. A healthcare
							professional can perform a thorough examination and provide
							personalized recommendations.
						</p>
						<p>
							[<span className="bg-primary text-white p-1 ">Option 1.1</span>:
							if you wants to know more about rotator cuff injuries]
						</p>
						<p>
							[<span className="bg-primary text-white p-1 ">Option 1.2</span>:
							if you want to asks about treatment options]
						</p>
					</div>,
				],
			},
			{
				patterns: [
					'no','no night pain','absence of nighttime pain',"pain doesn't worsen at night",
					'pain does not worse at night',
					'no the pain not worst at night',
					'option 2',
					'2',
				],
				responses: [
					<div className="col-md-11">
						{' '}
						I see. Based on what you've shared, it's possible that the cause of
						your weakness and discomfort might not be directly related to a
						rotator cuff injury. However, arm weakness can have various
						underlying factors, and if it persists or becomes concerning,
						seeking medical advice is recommended. A healthcare professional can
						help determine the cause and provide appropriate recommendations.
					</div>,
				],
			},
			// Add more pattern-response pairs as needed
			// ...
			{
				// Default response if no patterns match
				patterns: [], // Empty array for default pattern
				responses: [
					<div className="col-md-11">
						I'm sorry, I couldn't understand your input. Please provide more
						details.
					</div>,
				],
			},
		]

		for (const patternAndResponse of patternsAndResponses) {
			const { patterns, responses } = patternAndResponse

			if (!Array.isArray(patterns)) {
				console.error("Invalid 'patterns' array:", patterns)
				continue
			}

			if (!Array.isArray(responses)) {
				console.error("Invalid 'responses' array:", responses)
				continue
			}

			if (patterns.length === 0) {
				return responses[0]
			}

			const matchedPattern = patterns.find(keyword =>
				userInput.includes(keyword),
			)

			if (matchedPattern) {
				if (patterns === patternsAndResponses[0].patterns) {
					const randomIndex = Math.floor(Math.random() * responses.length)
					return responses[randomIndex]
				} else if (responses.length > 1) {
					const randomIndex =
						Math.floor(Math.random() * (responses.length - 1)) + 1
					return responses[randomIndex]
				} else if (responses.length === 1) {
					return responses[0]
				}
			}
		}

		console.error('No matching pattern found for input:', userInput)
		return null // Return null if no patterns match
	}

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			event.preventDefault() // Prevent the form submission
			handleSubmit() // Manually trigger the button click event
		}
	}

	return (
		<div className="chat-interface">
			<div className="chat-history" ref={chatHistoryRef}>
				{chatHistory.map((message, index) => (
					<div
						key={index}
						className={message.isUser ? 'user-message' : 'system-message'}
					>
						{message.text}
					</div>
				))}
			</div>
			<div className="input-container  col-md-12">
				<input
					type="text"
					id="userInput"
					placeholder="Type your message..."
					value={userInput}
					onChange={handleUserInput}
					onKeyDown={handleKeyPress} 
				// Handle "Enter" key press
				/>
				<button onClick={isLoading ? null : handleSubmit} disabled={isLoading}>
					{isLoading ? (
						<Bars
							height="30"
							width="40"
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
