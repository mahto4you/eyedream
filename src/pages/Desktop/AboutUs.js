import Footer from '../../components/reusableComponents/Footer';
import Navbar from '../../components/reusableComponents/Navbar';
import AboutUsMain from '../../components/reusableComponents/AboutUsMain';
function AboutUs({ active }) {
	return (
		<>
			<Navbar active={active} />
			<AboutUsMain />
			<Footer />
		</>
	);
}

export default AboutUs;
