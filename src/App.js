import './App.css'
import Header from './components/Header'
import MedicalDisclosure from './components/pages/MedicalDisclosure'
import Feedback from './components/pages/Feedback'
import User from './components/pages/User'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/medical" element={<MedicalDisclosure />} />
				<Route path="/feedback" element={<Feedback />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/user" element={<User />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
