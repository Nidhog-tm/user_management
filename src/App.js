import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { AnimatePresence} from "framer-motion";
import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SimpleSlider from "./components/Slider";
import UserSlider from "./components/UserSlider";
import Home from "./views/Home";
import Top from "./views/Top";
import Profile from "./views/Profile";
import List from "./views/App_list"
import Add from "./views/App_add"
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (

    
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        {/* <NavBar /> */}
        <Nav />
        {isAuthenticated && (
          <Container className="flex-grow-1 mt-5">
            <Route
              render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route path="/" exact component={Home} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/list" component={List} />
                  <Route path="/add" component={Add} />
                  <Route path="/slider" component={SimpleSlider} />
                  <Route path="/userslider" component={UserSlider} />
                </Switch>
              </AnimatePresence>
              )}
            />
          </Container>
        )}
        {!isAuthenticated && (
          <Container className="flex-grow-1 mt-5">
            <Top />
          </Container>
        )} 
        <Footer />
      </div>
    </Router>
  );
};

export default App;
