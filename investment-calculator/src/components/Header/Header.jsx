import './Header.css';
import investmentLogo from '../../assets/investment-calculator-logo.png';
export default function Header() {
	return (
		<header id="header">
			<img src={investmentLogo} alt="Investment logo" />
			<h1>React Investment Calculator</h1>
		</header>
	);
}
