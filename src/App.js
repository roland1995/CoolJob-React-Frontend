import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/mainPage/Main";

const App = () => {
	return (
		<Router>
			<div>
				<div>
					<NavBar />
				</div>
				<div>
					<Route exact path="/">
						<Redirect to="/main" />
					</Route>
					<Route path="/main" render={(props) => <Main />} />
					<Route path="/jobs" />
					<Route path="/fav" />
				</div>
			</div>
		</Router>
	);
};

export default App;
