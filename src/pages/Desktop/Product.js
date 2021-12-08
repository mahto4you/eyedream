import Footer from '../../components/reusableComponents/Footer';
import Navbar from '../../components/reusableComponents/Navbar';
import ProductMain from '../../components/reusableComponents/ProductMain';
function Product({ active }) {
	return (
		<>
			<Navbar active={active} />
			<ProductMain />
			<Footer />
		</>
	);
}

export default Product;
