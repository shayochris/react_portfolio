// import { useState } from 'react'
import{ BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/contact"><Contact/></Route>
        <Route exact path="/services"><Services/></Route>
      </Switch>
    </Router>
  )
}

export default App
