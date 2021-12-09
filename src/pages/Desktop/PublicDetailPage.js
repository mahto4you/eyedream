import BlogProduct from '../../components/reusableComponents/BlogProduct';
import Footer from '../../components/reusableComponents/Footer';
import Navbar from '../../components/reusableComponents/Navbar';
import PubDetailMain from '../../components/reusableComponents/PubDetailMain';
function Publication({ active }) {
	return (
		<>
			<Navbar active={active} />
			<PubDetailMain />
			<BlogProduct />

			<Footer />
		</>
	);
}

export default Publication;
