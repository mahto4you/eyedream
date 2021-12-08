import Footer from '../../components/reusableComponents/Footer';
import Navbar from '../../components/reusableComponents/Navbar';
import Main from '../../components/Main';
function LandingPage({ active }) {
	return (
		<>
			<Navbar active={active} />
			<Main />
			<Footer />
		</>
	);
}

export default LandingPage;
