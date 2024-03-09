import logoImg from '../assets/logo.png'

const companyNames = ['AWS', 'Meta', 'Apple'];
const applicantNames = ['Kay', 'Jin', 'Raul', ' Eric']

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	const company = companyNames[genRandomInt(2)];
	const applicant = applicantNames[genRandomInt(3)];

	return (
		<header>
			<img src={logoImg} alt="logo"/>
			<h1>ZERO</h1>
			<div>
				<h1>Company : {company}</h1>
				<h1>Applicatn : {applicant}</h1>
			</div>
		</header>
	)
}

export default Header