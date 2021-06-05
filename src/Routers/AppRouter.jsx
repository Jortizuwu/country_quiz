import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QuizScreen } from "../components/QuizScreen";
import { ResultsScrenn } from "../components/ResultsScrenn";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={QuizScreen} />
          <Route exact path="/results" component={ResultsScrenn} />
        </Switch>
      </div>
    </Router>
  );
};
