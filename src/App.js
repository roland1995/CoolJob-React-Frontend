import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { JobProvider } from './Contexts/JobContext';
import { DetailVisibilityProvider } from './Contexts/DetailVisibilityContext';
import { FilteredJobProvider } from './Contexts/FilteredJobsContext';

import NavBar from './components/navbar/NavBar';
import Main from './components/mainPage/Main';
import JobsBox from './components/jobsPage/JobsBox';
import JobDetailProvider from './Contexts/JobDetailContext';

const App = () => {
	return (
		<FilteredJobProvider>
			<JobDetailProvider>
				<DetailVisibilityProvider>
					<Router>
						<JobProvider>
							<div>
								<NavBar />
							</div>
							<Route exact path='/'>
								<Redirect to='/main' />
							</Route>
							<Route path='/main' render={(props) => <Main />} />
							<Route path='/jobs' component={() => <JobsBox />} />
							<Route path='/fav' />
						</JobProvider>
					</Router>
				</DetailVisibilityProvider>
			</JobDetailProvider>
		</FilteredJobProvider>
	);
};

export default App;
