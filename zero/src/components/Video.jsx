import InterviewBtn from "./InterviewBtn";

function Video(props) {
	function clickHandler() {
		console.log('Btn - Select');
	}

	return (
		<div>
			<h1>Interview Screen</h1>
			<h1>{props.description}</h1>
			<menu>
				<InterviewBtn onSelect={clickHandler}>Record</InterviewBtn>
				<InterviewBtn onSelect={clickHandler}>Stop</InterviewBtn>
				<InterviewBtn onSelect={clickHandler}>Screen share</InterviewBtn>
				<InterviewBtn onSelect={clickHandler}>Mute</InterviewBtn>
			</menu>
		</div>
	);
}

export default Video;