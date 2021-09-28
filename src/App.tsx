import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div>
            <Switch>
                {/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
                <Route path="/about">{/* <AboutMe /> */}</Route>

                <Route path="/about:website">{/* <AboutWebsite /> */}</Route>

                <Route path="/contact">{/* <Contact /> */}</Route>

                {/* If none of the previous routes render anything,
              this route acts as a fallback.
  
              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
                <Route path="/">{/* <Home /> */}</Route>
            </Switch>
        </div>
    );
}

export default App;
