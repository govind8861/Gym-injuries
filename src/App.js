import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React, { lazy, Suspense,useEffect,useState } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import { FidgetSpinner } from 'react-loader-spinner'


const MedicalDisclosure = lazy(() => import('./components/pages/MedicalDisclosure'));
const Feedback = lazy(() => import('./components/pages/Feedback'));
const User = lazy(() => import('./components/pages/User'));
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Contact = lazy(() => import('./components/pages/Contact'));


function App() {
	const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1500)
    
  },[])

	return (
		
		<div className="App">
			<Header />
			<Suspense fallback={
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
						}}
					>
						<FidgetSpinner
							visible={true}
							height="80"
							width="80"
							ariaLabel="hourglass-loading"
							wrapperStyle={{}}
							wrapperClass=""
							colors={['#306cce', '#72a1ed']}
						/>
					</div>
				}
			>
			<Routes>
				<Route path="/" element={loading?(		<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
						}}
					>
						<FidgetSpinner
							visible={true}
							height="100"
							width="150"
							ariaLabel="hourglass-loading"
							wrapperStyle={{}}
							wrapperClass=""
							colors={['#306cce', '#72a1ed']}
						/>
					</div>
				):<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/medical" element={<MedicalDisclosure />} />
				<Route path="/feedback" element={<Feedback />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/user" element={<User />} />
			</Routes>
			</Suspense>
    
			<FooterWithConditionalRendering />
		</div>
	)
}
function FooterWithConditionalRendering() {
	const location = useLocation()

	// Exclude the Footer component from rendering on the MedicalDisclosure page
	if (location.pathname === '/medical') {
		return null
	}

	return <Footer />
}

export default App
