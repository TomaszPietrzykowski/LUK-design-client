import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ui/ScrollToTop";
import Header from "./components/ui/Header";
import Home from "./components/pages/Home";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Header value={value} setValue={setValue} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={() => <div>Shop</div>} />
            <Route exact path="/offer" component={() => <div>Offer</div>} />
            <Route exact path="/gallery" component={() => <div>Gallery</div>} />
            <Route exact path="/about" component={() => <div>About</div>} />
            <Route exact path="/contact" component={() => <div>Contact</div>} />
          </Switch>
          {/* <Footer setValue={setValue} /> */}
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
