import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Home exact path="/" component={Home} />
      <About exact path="/about" component={About} />
      <Contact exact path="/contact" component={Contact} />
      <NotFound />
    </Switch>
  </BrowserRouter>
)

export default App
