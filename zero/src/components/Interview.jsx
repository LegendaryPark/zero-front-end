import InterviewBtn from "./InterviewBtn";
import { useState } from 'react';
import './Interview.css'

function Interview(props) {
	const [selectedBtn, setSelectedBtn] = useState('');

	function clickHandler(selectedButton) {
		setSelectedBtn(selectedButton);
	}

	return (
		<div id="tem">
			<h1>Interview Screen</h1>
			<h1>{props.description}</h1>
			{selectedBtn}
			<menu id="menubtn">
				<InterviewBtn onSelect={() => clickHandler('record')}>Record</InterviewBtn>
				<InterviewBtn onSelect={() => clickHandler('stop')}>Stop</InterviewBtn>
				<InterviewBtn onSelect={() => clickHandler('screen share')}>Screen share</InterviewBtn>
				<InterviewBtn onSelect={() => clickHandler('mute')}>Mute</InterviewBtn>
			</menu>
		</div>
	);
}

export default Interview;