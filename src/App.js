import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { JobProvider } from "./Contexts/JobContext";

import NavBar from "./components/navbar/NavBar";
import Main from "./components/mainPage/Main";
import JobsBox from "./components/jobsPage/JobsBox"

const App = () => {
	return (
		<Router>
			<JobProvider>
				<div>
					<div>
						<NavBar />
					</div>
					<div>
						<Route exact path="/">
							<Redirect to="/main" />
						</Route>
						<Route path="/main" render={(props) => <Main />} />
						<Route path="/jobs"  component={() => <JobsBox />}/>
						<Route path="/fav" />
					</div>
				</div>
			</JobProvider>
		</Router>
	);
};

export default App;
