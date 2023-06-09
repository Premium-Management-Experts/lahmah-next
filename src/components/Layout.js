import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div style={{ backgroundColor: '#25262b' }}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
