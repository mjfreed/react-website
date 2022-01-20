import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import AboutWebsite from "../pages/AboutWebsite";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Header from "./Header";

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Switch>
                {/* If the current URL is /about, this route is rendered
                    while the rest are ignored */}
                <Route path="/about" component={AboutMe} />

                <Route path="/about:website" component={AboutWebsite} />

                <Route path="/contact" component={Contact} />

                {/* If none of the previous routes render anything,
                    this route acts as a fallback.
        
                    Important: A route with path="/" will *always* match
                    the URL because all URLs begin with a /. So that's
                    why we put this one last of all */}
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
};

export default App;
