import './stylesheets/app.css';

import Nav from './containers/nav';
import Routes from './routes';
import Chatbox from './components/chatbox';
import Footer from './containers/footer';

function App() {
	return (
		<div className="app">
			<Nav />
			<div className="routes">
				<Routes />
			</div>
			<Chatbox />
			<Footer />
		</div>
	);
}

export default App;
