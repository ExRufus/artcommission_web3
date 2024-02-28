import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Invoice from './views/invoice'
import ThankyouForOrdering from './views/thankyou-for-ordering'
import RevisionAndProject1 from './views/revision-and-project1'
import SeeMore from './views/see-more'
import ProfileAddMoreArtEtc from './views/profile-add-more-art-etc'
import AddNewFreelance from './views/add-new-freelance'
import Dashboard from './views/dashboard'
import DetailsOfProject from './views/details-of-project'
import PaymentFlow from './views/payment-flow'
import ProfileSettingAndStuff from './views/profile-setting-and-stuff'
import RevisionAndProject from './views/revision-and-project'
import ProfileOtherPeopleHowTheySee from './views/profile-other-people-how-they-see'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Invoice} exact path="/invoice" />
        <Route
          component={ThankyouForOrdering}
          exact
          path="/thankyou-for-ordering"
        />
        <Route
          component={RevisionAndProject1}
          exact
          path="/revision-and-project1"
        />
        <Route component={SeeMore} exact path="/see-more" />
        <Route
          component={ProfileAddMoreArtEtc}
          exact
          path="/profile-add-more-art-etc"
        />
        <Route component={AddNewFreelance} exact path="/add-new-freelance" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={DetailsOfProject} exact path="/details-of-project" />
        <Route component={PaymentFlow} exact path="/payment-flow" />
        <Route
          component={ProfileSettingAndStuff}
          exact
          path="/profile-setting-and-stuff"
        />
        <Route
          component={RevisionAndProject}
          exact
          path="/revision-and-project"
        />
        <Route
          component={ProfileOtherPeopleHowTheySee}
          exact
          path="/profile-other-people-how-they-see"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
