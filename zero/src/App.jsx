import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Interview from './components/Interview.jsx'
import Message from './components/Message.jsx'
import Info from './components/Info.jsx'


function App() {
	return (
		<div id="app-div">
			<Header />
			<Info />
			<main id="mainid">
				<Interview id="interview" description="empty"/>
				<Message id="message"/>
			</main>
			<footer>
				<h5>footer</h5>
			</footer>
		</div>
	)
}

export default App
