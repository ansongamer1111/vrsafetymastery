import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SkillsExchangePage from './pages/SkillsExchangePage';
import SkillDetailsPage from './pages/SkillDetailsPage';
import PostSkillPage from './pages/PostSkillPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/skills" exact component={SkillsExchangePage} />
        <Route path="/skills/:id" component={SkillDetailsPage} />
        <Route path="/post-skill" component={PostSkillPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
