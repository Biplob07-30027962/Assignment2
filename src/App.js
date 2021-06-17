import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Routes from './Routes'

const App = () => {
	return (
		<div className="App">
			<Header />
			<Router>
				<Routes />
			</Router>
			<Footer />
		</div>
	);
}

export default App;
