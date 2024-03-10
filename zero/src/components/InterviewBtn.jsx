function InterviewBtn({ children, onSelect }) {
	return (
		<button onClick={onSelect}>{children}</button>
	);
}

export default InterviewBtn;