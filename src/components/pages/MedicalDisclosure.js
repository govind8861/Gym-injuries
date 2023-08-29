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
		//greetings
		if (
			(userInput.includes('hey') && userInput.includes('good morning')) ||
			(userInput.includes('hey') && userInput.includes('good afternoon')) ||
			(userInput.includes('hey') && userInput.includes('good evening')) ||
			(userInput.includes('hello') && userInput.includes('good evening')) ||
			(userInput.includes('hello') && userInput.includes('good afternoon')) ||
			(userInput.includes('hello') && userInput.includes('good morning')) ||
			userInput.includes('hey') ||
			userInput.includes('hello') ||
			userInput.includes('good morning') ||
			userInput.includes('good afternoon') ||
			userInput.includes('good evening')
		) {
			const greetings = [
				'Hello! How can I assist you today?',
				'Hey there! What can I do for you?',
				'Good day! How can I help?',
				'Hi! How can I be of service?',
				'Greetings! What can I assist you with?',
			]

			const randomIndex = Math.floor(Math.random() * greetings.length)
			return greetings[randomIndex]
		}
		//are pain worse at night:
		// Feeling pain in shoulder:

		if (
			(userInput.includes('pain') && userInput.includes('discomfort')) ||
			userInput.includes('shoulder pain') ||
			userInput.includes('shoulder') ||
			userInput.includes('pain in my shoulder ') ||
			userInput.includes('pain in shoulder') ||
			userInput.includes('feeling heavy in shoulder') ||
			userInput.includes('feeling heavy in my shoulder')
		) {
			return (
				<div className="col-md-10">
					It sounds like you're experiencing some discomfort . Let me help you
					identify the issue.Are you feeling any of these : disturb sleep ,dull
					ache deep in the shoulder or weakness in arms{' '}
				</div>
			)
		}
		//are pain worse at night:
		if (
			(userInput.includes('yes') && userInput.includes('the pain')) ||
			userInput.includes('deep shoulder pain') ||
			userInput.includes('deep pain ') ||
			userInput.includes('deep pain in shoulder') ||
			userInput.includes('feeling deep pain in the shoulder') ||
			userInput.includes('feeling deep pain in my shoulder')
		) {
			return (
				<div className="col-md-11">
					It sounds like you're experiencing deep pain in the shoulder .Are you
					able to sleep properly at night without heaving pain the shoulder or
					not?
				</div>
			)
		}
		//feeling arms weak:

		if (
			userInput.includes('weakness in arms') ||
			userInput.includes('weak arms') ||
			userInput.includes('arm weak') ||
			userInput.includes('arms are weak') ||
			userInput.includes('feeling weakness in arm') ||
			userInput.includes('joints')
		) {
			return (
				<div className="col-md-11">
					I'm sorry to hear that you're feeling weak in your arms. Let's work
					together to identify the possible causes of this weakness. Have you
					engaged in any activities recently that involve raising your arms
					overhead? This could include activities like lifting heavy objects,
					performing exercises, or even tasks that require reaching for items on
					high shelves. Please provide me with some more details so we can
					better understand your situation.{' '}
				</div>
			)
		}
		//if user input that he have weakness in arms due to some conditions:
		if (
			userInput.includes('not able ') ||
			userInput.includes('properly sleep') ||
			userInput.includes('pain get worse at night') ||
			userInput.includes('get worse at night') ||
			userInput.includes('night') ||
			userInput.includes('disturb sleep') ||
			userInput.includes('no sleep') ||
			userInput.includes('sleep properly')
		) {
			return (
				<div className="col-md-11">
					I'm sorry to hear that you're not able to sleep at night because of
					your shoulder pain.Your pain is not letting you sleep properly.can you
					tell me further so i should assist you accordingly.IF the pain is
					worse then it's better for you to seek medicals.I am here to help feel
					free to ask your question.{' '}
				</div>
			)
		}
		//if user input that he have weakness in arms due to some conditions:

		if (
			userInput.includes('lifted weights') ||
			userInput.includes('gym') ||
			userInput.includes('yesterday') ||
			userInput.includes('overhead exercise') ||
			userInput.includes('recently') ||
			userInput.includes('heavy objects') ||
			userInput.includes('high shelves') ||
			userInput.includes('shoulder exercises') ||
			userInput.includes('workout') ||
			userInput.includes("haven't") ||
			userInput.includes('any strenuous activities') ||
			userInput.includes('arms') ||
			userInput.includes('not sure') ||
			userInput.includes('causing') ||
			userInput.includes('weakness') ||
			userInput.includes('feeling weak') ||
			userInput.includes('experiencing weakness') ||
			userInput.includes('push-ups') ||
			userInput.includes('fatigued')
		) {
			return (
				<div className="col-md-11">
					{' '}
					Thank you for sharing that. Let's dive deeper into your symptoms. Are
					you experiencing any pain or discomfort in your shoulder area? If so,
					can you describe the type of pain (dull ache, sharp pain, etc.) and
					its intensity?{' '}
				</div>
			)
		}
		if (
			(userInput.includes('dull ache') && userInput.includes('yes')) ||
			userInput.includes('yes i have dull ache in my shoulder') ||
			userInput.includes('ache in shoulder') ||
			(userInput.includes('sharp pain') && userInput.includes('yes')) ||
			userInput.includes('pain in shoulder') ||
			userInput.includes('sharp pain in shoulder') ||
			userInput.includes('very pain ') ||
			userInput.includes('high intensity ') ||
			userInput.includes('intensity is high') ||
			userInput.includes('feeling sharp pain in shoulder')
		) {
			return (
				<div className="col-md-11">
					<p>
						{' '}
						I appreciate the information. A dull ache in the shoulder could be
						indicative of various conditions. To further narrow down the
						possibilities, have you noticed if the pain worsens at night or when
						you perform certain movements with your arm?
					</p>
					<p>[Option 1: Pain worsens at night or with certain movements]</p>
					<p>
						[Option 2: Pain doesn't worsen at night or with movements]. Choose
						any one or provide yours...
					</p>
				</div>
			)
		}
		if (
			userInput.includes('treatment ') ||
			userInput.includes('treatment of rotator cuff injury') ||
			userInput.includes('treatment of injury') ||
			userInput.includes('option 1.2') ||
			(userInput.includes('option') && userInput.includes('1.2'))
		) {
			return (
				<div className="col-md-11 d-block justify-content-evenly">
					{' '}
					<p>
						Treatment will depend on your symptoms and the length of time you
						have them. Your caregiver may want you to limit activity on your
						affected shoulder to decrease stress on the tendon. This may help
						prevent further damage, decrease pain, and promote tendon heal. The
						primary treatment is resting the shoulder and, for minor tears and
						inflammation, applying ice packs. You may need to wear a sling to
						keep the shoulder from moving .
					</p>
					<p>
						Anti-inflammatory medications may also be prescribed. As soon as
						pain decreases, physical therapy is usually started to help regain
						normal motion. If pain persists after several weeks, the physician
						may inject cortisone into the affected area.
					</p>
					<p>
						Surgery: If you have a large tear in your rotator cuff, you may need
						surgery to repair the tear. Sometimes during this kind of surgery,
						doctors may remove a bone spur or calcium deposits. The surgery may
						be performed as an open repair through a 6- to 10-centimeter
						incision, or as an arthroscopic repair with the aid of a small
						camera inserted through a smaller incision. An arthroscope is used
						to view the shoulder joint and confirm the presence of a tear. It
						can also remove any bone spurs that may be present in the shoulder
						area. The arthroscopic procedures usually involves 2in incision in
						the outer shoulder. During this time the torn rotator edge may be
						reattached to the humerus with stitches.
					</p>
					<p>
						Arthroplasty: Some long-standing shoulder muscle tears may
						contribute to the development of rotator cuff arthropathy, which can
						include severe arthritis. In such cases, your doctor may discuss
						with you more extensive surgical options, including partial shoulder
						replacement (hemiarthroplasty) or total shoulder replacement
						(prosthetic arthroplasty). A unique treatment option now available
						involves the use of a reverse ball-and-socket prosthesis. This
						reverse shoulder prosthesis is most appropriate for people who have
						very difficult shoulder problems. These include having arthritis in
						the joint, along with extensive tears of multiple muscles and
						tendons (rotator cuff) that support the shoulder, or having
						extensive rotator cuff tears and a failed previous shoulder joint
						replacement.
					</p>
				</div>
			)
		}

		if (
			userInput.includes('treatment ') ||
			userInput.includes('treatment of rotator cuff injury') ||
			userInput.includes('treatment of injury') ||
			userInput.includes('option 1.1') ||
			(userInput.includes('option') && userInput.includes('1.1'))
		) {
			return (
				<div className="col-md-11">
					<h6>why rotator cuff injury happen?</h6>
					<p>
						Rotator Cuff Tear: A ripping of one or more of the tendons Result
						when a sudden eccentric force applied to the rotator cuff resulting
						in failure of the tendon. Uncommon under the age of 40 but strains
						do occur. In the population over 40 years of age, supraspinatus
						tears occur and less commonly, infraspinatus tears. Tears in the
						subscapularis tendon are uncommon and are often the result of a
						shoulder dislocation.
					</p>
					<h6>Causes</h6>
					<p>
						Poor posture: When you slouch your neck and shoulders forward, the
						space where the rotator cuff muscles reside can become smaller. This
						can allow a muscle or tendon to become pinched under your shoulder
						bones, including your collarbone, especially during overhead
						activities, such as throwing. Falling: Using your arm to break a
						fall or falling on your arm can bruise or tear a rotator cuff tendon
						or muscle. Lifting or Pulling: Lifting an object that's too heavy,
						or doing so improperly (especially overhead) can strain or tear your
						tendons or muscles. Pulling something, such as an archery bow of too
						heavy poundage, may cause an injury.
					</p>
				</div>
			)
		}

		if (
			userInput.includes('yes ') ||
			userInput.includes('pain worse at night') ||
			userInput.includes('yes the pain worst at night') ||
			userInput.includes('option 1') ||
			(userInput.includes('option') && userInput.includes('1'))
		) {
			return (
				<div className="col-md-11">
					{' '}
					<p>
						Thank you for sharing that. Your description aligns with some
						characteristics of a rotator cuff injury. The combination of a dull
						ache that worsens at night and discomfort when reaching behind your
						back can be concerning. These symptoms can be associated with a
						rotator cuff strain or tear. While I can't provide a definitive
						diagnosis, I recommend considering a medical evaluation to determine
						the cause of your discomfort. A healthcare professional can perform
						a thorough examination and provide personalized recommendations.
					</p>
					<p>
						[<span className="bg-primary text-white p-1 ">Option 1.1</span>: if
						you wants to know more about rotator cuff injuries]
					</p>
					<p>
						[<span className="bg-primary text-white p-1 ">Option 1.2</span>: if
						you want to asks about treatment options]
					</p>
				</div>
			)
		} else if (
			userInput.includes('no ') ||
			userInput.includes('pain does not worse at night') ||
			userInput.includes('no the pain not worst at night') ||
			userInput.includes('option 2') ||
			(userInput.includes('option') && userInput.includes('2'))
		) {
			return (
				<div className="col-md-11">
					{' '}
					I see. Based on what you've shared, it's possible that the cause of
					your weakness and discomfort might not be directly related to a
					rotator cuff injury. However, arm weakness can have various underlying
					factors, and if it persists or becomes concerning, seeking medical
					advice is recommended. A healthcare professional can help determine
					the cause and provide appropriate recommendations.
				</div>
			)
		} else {
			return (
				<div className="col-md-11">
					I'm sorry, I couldn't understand your input. Please provide more
					details.
				</div>
			)
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
			<div className="input-container col-md-12">
				<input
					type="text"
					placeholder="Type your message..."
					value={userInput}
					onChange={handleUserInput}
					onKeyDown={handleKeyPress} // Handle "Enter" key press
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
