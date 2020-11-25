import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ui/ScrollToTop';
import Header from './components/ui/Header';
import Home from './components/pages/Home';
import DanceCouture from './components/pages/DanceCouture';
import WeddingDresses from './components/pages/WeddingDresses';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import CustomTailoring from './components/pages/CustomTailoring';

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Header value={value} setValue={setValue} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/webshop' component={() => <div>Shop</div>} />
            <Route exact path='/dancecouture' component={DanceCouture} />
            <Route exact path='/wedding' component={WeddingDresses} />
            <Route exact path='/custom' component={CustomTailoring} />
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          {/* <Footer setValue={setValue} /> */}
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
