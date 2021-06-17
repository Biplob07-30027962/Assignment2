import { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Article from "./Article";
import Header from "./Header";
import Footer from "./Footer";
import SCPList from "./SCPList";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Router>
					<Switch>
						<Route path="/" exact>
							<SCPList />
						</Route>
						<Route path="/article/*">
							<Article />
						</Route>
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
