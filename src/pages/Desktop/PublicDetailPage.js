import BlogProduct from '../../components/reusableComponents/BlogProduct';
import Footer from '../../components/reusableComponents/Footer';
import Navbar from '../../components/reusableComponents/Navbar';
import PublicationMain from '../../components/reusableComponents/PublicationMain';
function Publication({ active }) {
	return (
		<>
			<Navbar active={active} />
			{/* <PublicationMain /> */}
			<BlogProduct />

			<Footer />
		</>
	);
}

export default Publication;
