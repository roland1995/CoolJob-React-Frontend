import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { JobProvider } from './Contexts/JobContext';
import { DetailVisibilityProvider } from './Contexts/DetailVisibilityContext';
import { FavoriteJobProvider } from './Contexts/FavoriteJobContext';
import { OnJobProvider } from './Contexts/OnJobContext';
import { FilteredJobProvider } from './Contexts/FilteredJobsContext';


import NavBar from './components/navbar/NavBar';
import Main from './components/mainPage/Main';
import JobsBox from './components/jobsPage/JobsBox';
import FavoriteBox from './components/favoritePage/FavoriteBox';
import JobDetailProvider from './Contexts/JobDetailContext';

const App = () => {
	return (
    <FilteredJobProvider>
      <OnJobProvider>
        <FavoriteJobProvider>
          <JobDetailProvider>
            <DetailVisibilityProvider>
              <Router>
                <JobProvider>
                  <div>
                    <div>
                      <NavBar />
                    </div>
                    <div>
                      <Route exact path='/'>
                        <Redirect to='/main' />
                      </Route>
                      <Route path='/main' component={Main}} />
                      <Route path='/jobs' component={JobsBox} />
                      <Route path='/favorite' component={FavoriteBox} />
                    </div>
                  </div>
                </JobProvider>
              </Router>
            </DetailVisibilityProvider>
          </JobDetailProvider>
        </FavoriteJobProvider>
      </OnJobProvider>
    </FilteredJobProvider>
	);
};

export default App;
