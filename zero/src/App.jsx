import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Video from './components/Video.jsx'
import Message from './components/Message.jsx'
import InterviewBtn from './components/InterviewBtn.jsx'

function App() {
	return (
		<div>
			<Header />
			<main>
				<Video description="empty"/>
				<Message />
			</main>
			<footer>
				<h1>footer</h1>
			</footer>
		</div>
	)
}

export default App
